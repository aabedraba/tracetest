/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"context"
	"net/http"
)

// ApiApiRouter defines the required methods for binding the api requests to a responses for the ApiApi
// The ApiApiRouter implementation should parse necessary information from the http request,
// pass the data to a ApiApiServicer to perform the required actions, then write the service results to the http response.
type ApiApiRouter interface {
	DeleteTestRun(http.ResponseWriter, *http.Request)
	DeleteTestSuiteRun(http.ResponseWriter, *http.Request)
	DryRunAssertion(http.ResponseWriter, *http.Request)
	ExportTestRun(http.ResponseWriter, *http.Request)
	ExpressionResolve(http.ResponseWriter, *http.Request)
	GetResources(http.ResponseWriter, *http.Request)
	GetRunResultJUnit(http.ResponseWriter, *http.Request)
	GetTestResultSelectedSpans(http.ResponseWriter, *http.Request)
	GetTestRun(http.ResponseWriter, *http.Request)
	GetTestRunEvents(http.ResponseWriter, *http.Request)
	GetTestRuns(http.ResponseWriter, *http.Request)
	GetTestSpecs(http.ResponseWriter, *http.Request)
	GetTestSuiteRun(http.ResponseWriter, *http.Request)
	GetTestSuiteRuns(http.ResponseWriter, *http.Request)
	GetTestSuiteVersion(http.ResponseWriter, *http.Request)
	GetTestVersion(http.ResponseWriter, *http.Request)
	GetVersion(http.ResponseWriter, *http.Request)
	ImportTestRun(http.ResponseWriter, *http.Request)
	RerunTestRun(http.ResponseWriter, *http.Request)
	RunTest(http.ResponseWriter, *http.Request)
	RunTestSuite(http.ResponseWriter, *http.Request)
	StopTestRun(http.ResponseWriter, *http.Request)
	TestConnection(http.ResponseWriter, *http.Request)
	UpdateTestRun(http.ResponseWriter, *http.Request)
}

// ResourceApiApiRouter defines the required methods for binding the api requests to a responses for the ResourceApiApi
// The ResourceApiApiRouter implementation should parse necessary information from the http request,
// pass the data to a ResourceApiApiServicer to perform the required actions, then write the service results to the http response.
type ResourceApiApiRouter interface {
	CreateDemo(http.ResponseWriter, *http.Request)
	CreateLinter(http.ResponseWriter, *http.Request)
	CreateTest(http.ResponseWriter, *http.Request)
	CreateTestSuite(http.ResponseWriter, *http.Request)
	CreateVariableSet(http.ResponseWriter, *http.Request)
	DeleteDataStore(http.ResponseWriter, *http.Request)
	DeleteDemo(http.ResponseWriter, *http.Request)
	DeleteLinter(http.ResponseWriter, *http.Request)
	DeleteTest(http.ResponseWriter, *http.Request)
	DeleteTestSuite(http.ResponseWriter, *http.Request)
	DeleteVariableSet(http.ResponseWriter, *http.Request)
	GetConfiguration(http.ResponseWriter, *http.Request)
	GetDataStore(http.ResponseWriter, *http.Request)
	GetDemo(http.ResponseWriter, *http.Request)
	GetLinter(http.ResponseWriter, *http.Request)
	GetPollingProfile(http.ResponseWriter, *http.Request)
	GetTestSuite(http.ResponseWriter, *http.Request)
	GetTestSuites(http.ResponseWriter, *http.Request)
	GetTests(http.ResponseWriter, *http.Request)
	GetVariableSet(http.ResponseWriter, *http.Request)
	ListConfiguration(http.ResponseWriter, *http.Request)
	ListDataStore(http.ResponseWriter, *http.Request)
	ListDemos(http.ResponseWriter, *http.Request)
	ListLinters(http.ResponseWriter, *http.Request)
	ListPollingProfile(http.ResponseWriter, *http.Request)
	ListVariableSets(http.ResponseWriter, *http.Request)
	TestsTestIdGet(http.ResponseWriter, *http.Request)
	UpdateConfiguration(http.ResponseWriter, *http.Request)
	UpdateDataStore(http.ResponseWriter, *http.Request)
	UpdateDemo(http.ResponseWriter, *http.Request)
	UpdateLinter(http.ResponseWriter, *http.Request)
	UpdatePollingProfile(http.ResponseWriter, *http.Request)
	UpdateTest(http.ResponseWriter, *http.Request)
	UpdateTestSuite(http.ResponseWriter, *http.Request)
	UpdateVariableSet(http.ResponseWriter, *http.Request)
}

// ApiApiServicer defines the api actions for the ApiApi service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type ApiApiServicer interface {
	DeleteTestRun(context.Context, string, int32) (ImplResponse, error)
	DeleteTestSuiteRun(context.Context, string, int32) (ImplResponse, error)
	DryRunAssertion(context.Context, string, int32, TestSpecs) (ImplResponse, error)
	ExportTestRun(context.Context, string, int32) (ImplResponse, error)
	ExpressionResolve(context.Context, ResolveRequestInfo) (ImplResponse, error)
	GetResources(context.Context, int32, int32, string, string, string) (ImplResponse, error)
	GetRunResultJUnit(context.Context, string, int32) (ImplResponse, error)
	GetTestResultSelectedSpans(context.Context, string, int32, string) (ImplResponse, error)
	GetTestRun(context.Context, string, int32) (ImplResponse, error)
	GetTestRunEvents(context.Context, string, int32) (ImplResponse, error)
	GetTestRuns(context.Context, string, int32, int32) (ImplResponse, error)
	GetTestSpecs(context.Context, string) (ImplResponse, error)
	GetTestSuiteRun(context.Context, string, int32) (ImplResponse, error)
	GetTestSuiteRuns(context.Context, string, int32, int32) (ImplResponse, error)
	GetTestSuiteVersion(context.Context, string, int32) (ImplResponse, error)
	GetTestVersion(context.Context, string, int32) (ImplResponse, error)
	GetVersion(context.Context, string) (ImplResponse, error)
	ImportTestRun(context.Context, ExportedTestInformation) (ImplResponse, error)
	RerunTestRun(context.Context, string, int32) (ImplResponse, error)
	RunTest(context.Context, string, RunInformation) (ImplResponse, error)
	RunTestSuite(context.Context, string, RunInformation) (ImplResponse, error)
	StopTestRun(context.Context, string, int32) (ImplResponse, error)
	TestConnection(context.Context, DataStore) (ImplResponse, error)
	UpdateTestRun(context.Context, string, int32, TestRun) (ImplResponse, error)
}

// ResourceApiApiServicer defines the api actions for the ResourceApiApi service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type ResourceApiApiServicer interface {
	CreateDemo(context.Context, Demo) (ImplResponse, error)
	CreateLinter(context.Context, LinterResource) (ImplResponse, error)
	CreateTest(context.Context, Test) (ImplResponse, error)
	CreateTestSuite(context.Context, TestSuiteResource) (ImplResponse, error)
	CreateVariableSet(context.Context, VariableSetResource) (ImplResponse, error)
	DeleteDataStore(context.Context, string) (ImplResponse, error)
	DeleteDemo(context.Context, string) (ImplResponse, error)
	DeleteLinter(context.Context, string) (ImplResponse, error)
	DeleteTest(context.Context, string) (ImplResponse, error)
	DeleteTestSuite(context.Context, string) (ImplResponse, error)
	DeleteVariableSet(context.Context, string) (ImplResponse, error)
	GetConfiguration(context.Context, string) (ImplResponse, error)
	GetDataStore(context.Context, string) (ImplResponse, error)
	GetDemo(context.Context, string) (ImplResponse, error)
	GetLinter(context.Context, string) (ImplResponse, error)
	GetPollingProfile(context.Context, string) (ImplResponse, error)
	GetTestSuite(context.Context, string) (ImplResponse, error)
	GetTestSuites(context.Context, int32, int32, string, string, string) (ImplResponse, error)
	GetTests(context.Context, int32, int32, string, string, string) (ImplResponse, error)
	GetVariableSet(context.Context, string) (ImplResponse, error)
	ListConfiguration(context.Context, int32, int32, string, string) (ImplResponse, error)
	ListDataStore(context.Context, int32, int32, string, string) (ImplResponse, error)
	ListDemos(context.Context, int32, int32, string, string) (ImplResponse, error)
	ListLinters(context.Context, int32, int32, string, string) (ImplResponse, error)
	ListPollingProfile(context.Context, int32, int32, string, string) (ImplResponse, error)
	ListVariableSets(context.Context, int32, int32, string, string) (ImplResponse, error)
	TestsTestIdGet(context.Context, string) (ImplResponse, error)
	UpdateConfiguration(context.Context, string, ConfigurationResource) (ImplResponse, error)
	UpdateDataStore(context.Context, string, DataStore) (ImplResponse, error)
	UpdateDemo(context.Context, string, Demo) (ImplResponse, error)
	UpdateLinter(context.Context, string, LinterResource) (ImplResponse, error)
	UpdatePollingProfile(context.Context, string, PollingProfile) (ImplResponse, error)
	UpdateTest(context.Context, string, Test) (ImplResponse, error)
	UpdateTestSuite(context.Context, string, TestSuiteResource) (ImplResponse, error)
	UpdateVariableSet(context.Context, string, VariableSetResource) (ImplResponse, error)
}
