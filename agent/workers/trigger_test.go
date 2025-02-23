package workers_test

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/kubeshop/tracetest/agent/client"
	"github.com/kubeshop/tracetest/agent/client/mocks"
	"github.com/kubeshop/tracetest/agent/collector"
	"github.com/kubeshop/tracetest/agent/proto"
	"github.com/kubeshop/tracetest/agent/workers"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestTrigger(t *testing.T) {
	cache := collector.NewTraceCache()
	controlPlane := mocks.NewGrpcServer()

	client, err := client.Connect(context.Background(), controlPlane.Addr())
	require.NoError(t, err)

	triggerWorker := workers.NewTriggerWorker(client, workers.WithTraceCache(cache))

	client.OnTriggerRequest(func(ctx context.Context, tr *proto.TriggerRequest) error {
		err := triggerWorker.Trigger(ctx, tr)
		assert.NoError(t, err, "trigger failed")
		return err
	})

	client.Start(context.Background())

	targetServer := createHelloWorldApi()
	traceID := "42a2c381da1a5b3a32bc4988bf2431b0"

	triggerRequest := &proto.TriggerRequest{
		TestID:  "my test",
		RunID:   1,
		TraceID: traceID,
		Trigger: &proto.Trigger{
			Type: "http",
			Http: &proto.HttpRequest{
				Method: "GET",
				Url:    targetServer.URL,
				Headers: []*proto.HttpHeader{
					{Key: "Content-Type", Value: "application/json"},
				},
			},
		},
	}

	// make the control plane send a trigger request to the agent
	controlPlane.SendTriggerRequest(triggerRequest)
	time.Sleep(1 * time.Second)

	response := controlPlane.GetLastTriggerResponse()

	require.NotNil(t, response)
	assert.Equal(t, "http", response.TriggerResult.Type)
	assert.Equal(t, int32(http.StatusOK), response.TriggerResult.Http.StatusCode)
	assert.JSONEq(t, `{"hello": "world"}`, response.TriggerResult.Http.Body)

	_, traceIdIsWatched := cache.Get(traceID)
	assert.True(t, traceIdIsWatched)
}

func createHelloWorldApi() *httptest.Server {
	return httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"hello": "world"}`))
		w.WriteHeader(http.StatusOK)
	}))
}
