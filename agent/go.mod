module github.com/kubeshop/tracetest/agent

go 1.21

require (
	github.com/Azure/azure-sdk-for-go/sdk/azcore v1.6.0
	github.com/Azure/azure-sdk-for-go/sdk/azidentity v1.3.0
	github.com/Azure/azure-sdk-for-go/sdk/monitor/azquery v1.1.0
	github.com/Code-Hex/go-generics-cache v1.3.1
	github.com/aws/aws-sdk-go v1.44.196
	github.com/davecgh/go-spew v1.1.1
	github.com/elastic/go-elasticsearch/v8 v8.4.0-alpha.1.0.20221227164349-c40d762a40ad
	github.com/fluidtruck/deepcopy v1.0.0
	github.com/fullstorydev/grpcurl v1.8.6
	github.com/gogo/protobuf v1.3.2
	github.com/golang/protobuf v1.5.2
	github.com/goware/urlx v0.3.2
	github.com/hashicorp/go-multierror v1.1.1
	github.com/jhump/protoreflect v1.12.0
	github.com/kubeshop/tracetest/server v0.0.0-20230809150857-6314696222d3
	github.com/opensearch-project/opensearch-go v1.1.0
	github.com/pkg/errors v0.9.1
	github.com/prometheus/prometheus v1.8.2-0.20211217191541-41f1a8125e66
	github.com/spf13/cobra v1.6.1
	github.com/spf13/viper v1.15.0
	github.com/stretchr/testify v1.8.1
	go.opencensus.io v0.24.0
	go.opentelemetry.io/collector v0.44.0
	go.opentelemetry.io/collector/semconv v0.71.0
	go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc v0.28.0
	go.opentelemetry.io/contrib/propagators/aws v1.5.0
	go.opentelemetry.io/contrib/propagators/b3 v1.5.0
	go.opentelemetry.io/contrib/propagators/jaeger v1.5.0
	go.opentelemetry.io/contrib/propagators/ot v1.5.0
	go.opentelemetry.io/otel v1.10.0
	go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc v1.6.0
	go.opentelemetry.io/otel/sdk v1.10.0
	go.opentelemetry.io/otel/trace v1.10.0
	go.opentelemetry.io/proto/otlp v0.19.0
	google.golang.org/grpc v1.53.0
	google.golang.org/protobuf v1.28.1
)

require (
	github.com/Azure/azure-sdk-for-go/sdk/internal v1.3.0 // indirect
	github.com/AzureAD/microsoft-authentication-library-for-go v1.0.0 // indirect
	github.com/PuerkitoBio/purell v1.1.1 // indirect
	github.com/PuerkitoBio/urlesc v0.0.0-20170810143723-de5bf2ad4578 // indirect
	github.com/alecthomas/participle/v2 v2.0.0-alpha8 // indirect
	github.com/brianvoe/gofakeit/v6 v6.17.0 // indirect
	github.com/cenkalti/backoff/v4 v4.1.3 // indirect
	github.com/elastic/elastic-transport-go/v8 v8.0.0-20211216131617-bbee439d559c // indirect
	github.com/fatih/color v1.13.0 // indirect
	github.com/felixge/httpsnoop v1.0.2 // indirect
	github.com/fsnotify/fsnotify v1.6.0 // indirect
	github.com/go-logr/logr v1.2.3 // indirect
	github.com/go-logr/stdr v1.2.2 // indirect
	github.com/goccy/go-yaml v1.11.0 // indirect
	github.com/golang-jwt/jwt/v4 v4.5.0 // indirect
	github.com/golang/groupcache v0.0.0-20210331224755-41bb18bfe9da // indirect
	github.com/golang/snappy v0.0.4 // indirect
	github.com/google/uuid v1.3.0 // indirect
	github.com/gorilla/handlers v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0 // indirect
	github.com/grpc-ecosystem/grpc-gateway/v2 v2.7.0 // indirect
	github.com/hashicorp/errwrap v1.1.0 // indirect
	github.com/hashicorp/hcl v1.0.0 // indirect
	github.com/inconshreveable/mousetrap v1.0.1 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a // indirect
	github.com/jackc/pgx/v5 v5.4.2 // indirect
	github.com/jackc/puddle/v2 v2.2.0 // indirect
	github.com/jmespath/go-jmespath v0.4.0 // indirect
	github.com/json-iterator/go v1.1.12 // indirect
	github.com/klauspost/compress v1.15.6 // indirect
	github.com/knadh/koanf v1.4.0 // indirect
	github.com/kylelemons/godebug v1.1.0 // indirect
	github.com/magiconair/properties v1.8.7 // indirect
	github.com/mattn/go-colorable v0.1.12 // indirect
	github.com/mattn/go-isatty v0.0.14 // indirect
	github.com/mitchellh/copystructure v1.2.0 // indirect
	github.com/mitchellh/mapstructure v1.5.0 // indirect
	github.com/mitchellh/reflectwalk v1.0.2 // indirect
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.2 // indirect
	github.com/mostynb/go-grpc-compression v1.1.16 // indirect
	github.com/ohler55/ojg v1.14.4 // indirect
	github.com/pelletier/go-toml/v2 v2.0.6 // indirect
	github.com/pkg/browser v0.0.0-20210911075715-681adbf594b8 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/segmentio/analytics-go/v3 v3.2.1 // indirect
	github.com/segmentio/backo-go v1.0.0 // indirect
	github.com/spf13/afero v1.9.3 // indirect
	github.com/spf13/cast v1.5.0 // indirect
	github.com/spf13/jwalterweatherman v1.1.0 // indirect
	github.com/spf13/pflag v1.0.5 // indirect
	github.com/subosito/gotenv v1.4.2 // indirect
	github.com/teris-io/shortid v0.0.0-20220617161101-71ec9f2aa569 // indirect
	go.opentelemetry.io/collector/model v0.44.0 // indirect
	go.opentelemetry.io/collector/pdata v0.49.0 // indirect
	go.opentelemetry.io/otel/exporters/otlp/internal/retry v1.10.0 // indirect
	go.opentelemetry.io/otel/exporters/otlp/otlptrace v1.10.0 // indirect
	go.opentelemetry.io/otel/metric v0.26.0 // indirect
	go.uber.org/atomic v1.9.0 // indirect
	go.uber.org/multierr v1.8.0 // indirect
	go.uber.org/zap v1.21.0 // indirect
	golang.org/x/crypto v0.9.0 // indirect
	golang.org/x/exp v0.0.0-20221217163422-3c43f8badb15 // indirect
	golang.org/x/net v0.10.0 // indirect
	golang.org/x/sync v0.1.0 // indirect
	golang.org/x/sys v0.8.0 // indirect
	golang.org/x/text v0.9.0 // indirect
	golang.org/x/xerrors v0.0.0-20220907171357-04be3eba64a2 // indirect
	google.golang.org/genproto v0.0.0-20230110181048-76db0878b65f // indirect
	gopkg.in/ini.v1 v1.67.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
)
