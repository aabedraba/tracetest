// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.2
// source: proto/orchestrator.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Orchestrator_Connect_FullMethodName                              = "/proto.Orchestrator/Connect"
	Orchestrator_RegisterTriggerAgent_FullMethodName                 = "/proto.Orchestrator/RegisterTriggerAgent"
	Orchestrator_SendTriggerResult_FullMethodName                    = "/proto.Orchestrator/SendTriggerResult"
	Orchestrator_RegisterPollerAgent_FullMethodName                  = "/proto.Orchestrator/RegisterPollerAgent"
	Orchestrator_SendPolledSpans_FullMethodName                      = "/proto.Orchestrator/SendPolledSpans"
	Orchestrator_RegisterShutdownListener_FullMethodName             = "/proto.Orchestrator/RegisterShutdownListener"
	Orchestrator_Ping_FullMethodName                                 = "/proto.Orchestrator/Ping"
	Orchestrator_RegisterDataStoreConnectionTestAgent_FullMethodName = "/proto.Orchestrator/RegisterDataStoreConnectionTestAgent"
	Orchestrator_SendDataStoreConnectionTestResult_FullMethodName    = "/proto.Orchestrator/SendDataStoreConnectionTestResult"
)

// OrchestratorClient is the client API for Orchestrator service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OrchestratorClient interface {
	// Connects an agent and returns the configuration that must be used by that agent
	Connect(ctx context.Context, in *ConnectRequest, opts ...grpc.CallOption) (*AgentConfiguration, error)
	// Register an agent as a trigger agent, once connected, the server will be able to send
	// multiple trigger requests to the agent.
	RegisterTriggerAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterTriggerAgentClient, error)
	// Sends the trigger result back to the server
	SendTriggerResult(ctx context.Context, in *TriggerResponse, opts ...grpc.CallOption) (*Empty, error)
	// Register an agent as a poller agent, once connected, the server will be able to send
	// multiple polling requests to the agent
	RegisterPollerAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterPollerAgentClient, error)
	// Sends polled spans to the server
	SendPolledSpans(ctx context.Context, in *PollingResponse, opts ...grpc.CallOption) (*Empty, error)
	// Register an agent to listen for shutdown commands
	RegisterShutdownListener(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterShutdownListenerClient, error)
	// Ping is used to check if the agent is still connected
	Ping(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (*Empty, error)
	// Register an agent to listen for datastore connection test requests
	RegisterDataStoreConnectionTestAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterDataStoreConnectionTestAgentClient, error)
	// Sends datastore connection test result back to the server
	SendDataStoreConnectionTestResult(ctx context.Context, in *DataStoreConnectionTestResponse, opts ...grpc.CallOption) (*Empty, error)
}

type orchestratorClient struct {
	cc grpc.ClientConnInterface
}

func NewOrchestratorClient(cc grpc.ClientConnInterface) OrchestratorClient {
	return &orchestratorClient{cc}
}

func (c *orchestratorClient) Connect(ctx context.Context, in *ConnectRequest, opts ...grpc.CallOption) (*AgentConfiguration, error) {
	out := new(AgentConfiguration)
	err := c.cc.Invoke(ctx, Orchestrator_Connect_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *orchestratorClient) RegisterTriggerAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterTriggerAgentClient, error) {
	stream, err := c.cc.NewStream(ctx, &Orchestrator_ServiceDesc.Streams[0], Orchestrator_RegisterTriggerAgent_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &orchestratorRegisterTriggerAgentClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Orchestrator_RegisterTriggerAgentClient interface {
	Recv() (*TriggerRequest, error)
	grpc.ClientStream
}

type orchestratorRegisterTriggerAgentClient struct {
	grpc.ClientStream
}

func (x *orchestratorRegisterTriggerAgentClient) Recv() (*TriggerRequest, error) {
	m := new(TriggerRequest)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *orchestratorClient) SendTriggerResult(ctx context.Context, in *TriggerResponse, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, Orchestrator_SendTriggerResult_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *orchestratorClient) RegisterPollerAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterPollerAgentClient, error) {
	stream, err := c.cc.NewStream(ctx, &Orchestrator_ServiceDesc.Streams[1], Orchestrator_RegisterPollerAgent_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &orchestratorRegisterPollerAgentClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Orchestrator_RegisterPollerAgentClient interface {
	Recv() (*PollingRequest, error)
	grpc.ClientStream
}

type orchestratorRegisterPollerAgentClient struct {
	grpc.ClientStream
}

func (x *orchestratorRegisterPollerAgentClient) Recv() (*PollingRequest, error) {
	m := new(PollingRequest)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *orchestratorClient) SendPolledSpans(ctx context.Context, in *PollingResponse, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, Orchestrator_SendPolledSpans_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *orchestratorClient) RegisterShutdownListener(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterShutdownListenerClient, error) {
	stream, err := c.cc.NewStream(ctx, &Orchestrator_ServiceDesc.Streams[2], Orchestrator_RegisterShutdownListener_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &orchestratorRegisterShutdownListenerClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Orchestrator_RegisterShutdownListenerClient interface {
	Recv() (*ShutdownRequest, error)
	grpc.ClientStream
}

type orchestratorRegisterShutdownListenerClient struct {
	grpc.ClientStream
}

func (x *orchestratorRegisterShutdownListenerClient) Recv() (*ShutdownRequest, error) {
	m := new(ShutdownRequest)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *orchestratorClient) Ping(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, Orchestrator_Ping_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *orchestratorClient) RegisterDataStoreConnectionTestAgent(ctx context.Context, in *AgentIdentification, opts ...grpc.CallOption) (Orchestrator_RegisterDataStoreConnectionTestAgentClient, error) {
	stream, err := c.cc.NewStream(ctx, &Orchestrator_ServiceDesc.Streams[3], Orchestrator_RegisterDataStoreConnectionTestAgent_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &orchestratorRegisterDataStoreConnectionTestAgentClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Orchestrator_RegisterDataStoreConnectionTestAgentClient interface {
	Recv() (*DataStoreConnectionTestRequest, error)
	grpc.ClientStream
}

type orchestratorRegisterDataStoreConnectionTestAgentClient struct {
	grpc.ClientStream
}

func (x *orchestratorRegisterDataStoreConnectionTestAgentClient) Recv() (*DataStoreConnectionTestRequest, error) {
	m := new(DataStoreConnectionTestRequest)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *orchestratorClient) SendDataStoreConnectionTestResult(ctx context.Context, in *DataStoreConnectionTestResponse, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, Orchestrator_SendDataStoreConnectionTestResult_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OrchestratorServer is the server API for Orchestrator service.
// All implementations must embed UnimplementedOrchestratorServer
// for forward compatibility
type OrchestratorServer interface {
	// Connects an agent and returns the configuration that must be used by that agent
	Connect(context.Context, *ConnectRequest) (*AgentConfiguration, error)
	// Register an agent as a trigger agent, once connected, the server will be able to send
	// multiple trigger requests to the agent.
	RegisterTriggerAgent(*AgentIdentification, Orchestrator_RegisterTriggerAgentServer) error
	// Sends the trigger result back to the server
	SendTriggerResult(context.Context, *TriggerResponse) (*Empty, error)
	// Register an agent as a poller agent, once connected, the server will be able to send
	// multiple polling requests to the agent
	RegisterPollerAgent(*AgentIdentification, Orchestrator_RegisterPollerAgentServer) error
	// Sends polled spans to the server
	SendPolledSpans(context.Context, *PollingResponse) (*Empty, error)
	// Register an agent to listen for shutdown commands
	RegisterShutdownListener(*AgentIdentification, Orchestrator_RegisterShutdownListenerServer) error
	// Ping is used to check if the agent is still connected
	Ping(context.Context, *AgentIdentification) (*Empty, error)
	// Register an agent to listen for datastore connection test requests
	RegisterDataStoreConnectionTestAgent(*AgentIdentification, Orchestrator_RegisterDataStoreConnectionTestAgentServer) error
	// Sends datastore connection test result back to the server
	SendDataStoreConnectionTestResult(context.Context, *DataStoreConnectionTestResponse) (*Empty, error)
	mustEmbedUnimplementedOrchestratorServer()
}

// UnimplementedOrchestratorServer must be embedded to have forward compatible implementations.
type UnimplementedOrchestratorServer struct {
}

func (UnimplementedOrchestratorServer) Connect(context.Context, *ConnectRequest) (*AgentConfiguration, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Connect not implemented")
}
func (UnimplementedOrchestratorServer) RegisterTriggerAgent(*AgentIdentification, Orchestrator_RegisterTriggerAgentServer) error {
	return status.Errorf(codes.Unimplemented, "method RegisterTriggerAgent not implemented")
}
func (UnimplementedOrchestratorServer) SendTriggerResult(context.Context, *TriggerResponse) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendTriggerResult not implemented")
}
func (UnimplementedOrchestratorServer) RegisterPollerAgent(*AgentIdentification, Orchestrator_RegisterPollerAgentServer) error {
	return status.Errorf(codes.Unimplemented, "method RegisterPollerAgent not implemented")
}
func (UnimplementedOrchestratorServer) SendPolledSpans(context.Context, *PollingResponse) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendPolledSpans not implemented")
}
func (UnimplementedOrchestratorServer) RegisterShutdownListener(*AgentIdentification, Orchestrator_RegisterShutdownListenerServer) error {
	return status.Errorf(codes.Unimplemented, "method RegisterShutdownListener not implemented")
}
func (UnimplementedOrchestratorServer) Ping(context.Context, *AgentIdentification) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Ping not implemented")
}
func (UnimplementedOrchestratorServer) RegisterDataStoreConnectionTestAgent(*AgentIdentification, Orchestrator_RegisterDataStoreConnectionTestAgentServer) error {
	return status.Errorf(codes.Unimplemented, "method RegisterDataStoreConnectionTestAgent not implemented")
}
func (UnimplementedOrchestratorServer) SendDataStoreConnectionTestResult(context.Context, *DataStoreConnectionTestResponse) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendDataStoreConnectionTestResult not implemented")
}
func (UnimplementedOrchestratorServer) mustEmbedUnimplementedOrchestratorServer() {}

// UnsafeOrchestratorServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OrchestratorServer will
// result in compilation errors.
type UnsafeOrchestratorServer interface {
	mustEmbedUnimplementedOrchestratorServer()
}

func RegisterOrchestratorServer(s grpc.ServiceRegistrar, srv OrchestratorServer) {
	s.RegisterService(&Orchestrator_ServiceDesc, srv)
}

func _Orchestrator_Connect_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ConnectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrchestratorServer).Connect(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Orchestrator_Connect_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrchestratorServer).Connect(ctx, req.(*ConnectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Orchestrator_RegisterTriggerAgent_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(AgentIdentification)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrchestratorServer).RegisterTriggerAgent(m, &orchestratorRegisterTriggerAgentServer{stream})
}

type Orchestrator_RegisterTriggerAgentServer interface {
	Send(*TriggerRequest) error
	grpc.ServerStream
}

type orchestratorRegisterTriggerAgentServer struct {
	grpc.ServerStream
}

func (x *orchestratorRegisterTriggerAgentServer) Send(m *TriggerRequest) error {
	return x.ServerStream.SendMsg(m)
}

func _Orchestrator_SendTriggerResult_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TriggerResponse)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrchestratorServer).SendTriggerResult(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Orchestrator_SendTriggerResult_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrchestratorServer).SendTriggerResult(ctx, req.(*TriggerResponse))
	}
	return interceptor(ctx, in, info, handler)
}

func _Orchestrator_RegisterPollerAgent_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(AgentIdentification)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrchestratorServer).RegisterPollerAgent(m, &orchestratorRegisterPollerAgentServer{stream})
}

type Orchestrator_RegisterPollerAgentServer interface {
	Send(*PollingRequest) error
	grpc.ServerStream
}

type orchestratorRegisterPollerAgentServer struct {
	grpc.ServerStream
}

func (x *orchestratorRegisterPollerAgentServer) Send(m *PollingRequest) error {
	return x.ServerStream.SendMsg(m)
}

func _Orchestrator_SendPolledSpans_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PollingResponse)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrchestratorServer).SendPolledSpans(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Orchestrator_SendPolledSpans_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrchestratorServer).SendPolledSpans(ctx, req.(*PollingResponse))
	}
	return interceptor(ctx, in, info, handler)
}

func _Orchestrator_RegisterShutdownListener_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(AgentIdentification)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrchestratorServer).RegisterShutdownListener(m, &orchestratorRegisterShutdownListenerServer{stream})
}

type Orchestrator_RegisterShutdownListenerServer interface {
	Send(*ShutdownRequest) error
	grpc.ServerStream
}

type orchestratorRegisterShutdownListenerServer struct {
	grpc.ServerStream
}

func (x *orchestratorRegisterShutdownListenerServer) Send(m *ShutdownRequest) error {
	return x.ServerStream.SendMsg(m)
}

func _Orchestrator_Ping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentIdentification)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrchestratorServer).Ping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Orchestrator_Ping_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrchestratorServer).Ping(ctx, req.(*AgentIdentification))
	}
	return interceptor(ctx, in, info, handler)
}

func _Orchestrator_RegisterDataStoreConnectionTestAgent_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(AgentIdentification)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrchestratorServer).RegisterDataStoreConnectionTestAgent(m, &orchestratorRegisterDataStoreConnectionTestAgentServer{stream})
}

type Orchestrator_RegisterDataStoreConnectionTestAgentServer interface {
	Send(*DataStoreConnectionTestRequest) error
	grpc.ServerStream
}

type orchestratorRegisterDataStoreConnectionTestAgentServer struct {
	grpc.ServerStream
}

func (x *orchestratorRegisterDataStoreConnectionTestAgentServer) Send(m *DataStoreConnectionTestRequest) error {
	return x.ServerStream.SendMsg(m)
}

func _Orchestrator_SendDataStoreConnectionTestResult_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DataStoreConnectionTestResponse)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrchestratorServer).SendDataStoreConnectionTestResult(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Orchestrator_SendDataStoreConnectionTestResult_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrchestratorServer).SendDataStoreConnectionTestResult(ctx, req.(*DataStoreConnectionTestResponse))
	}
	return interceptor(ctx, in, info, handler)
}

// Orchestrator_ServiceDesc is the grpc.ServiceDesc for Orchestrator service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Orchestrator_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Orchestrator",
	HandlerType: (*OrchestratorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Connect",
			Handler:    _Orchestrator_Connect_Handler,
		},
		{
			MethodName: "SendTriggerResult",
			Handler:    _Orchestrator_SendTriggerResult_Handler,
		},
		{
			MethodName: "SendPolledSpans",
			Handler:    _Orchestrator_SendPolledSpans_Handler,
		},
		{
			MethodName: "Ping",
			Handler:    _Orchestrator_Ping_Handler,
		},
		{
			MethodName: "SendDataStoreConnectionTestResult",
			Handler:    _Orchestrator_SendDataStoreConnectionTestResult_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "RegisterTriggerAgent",
			Handler:       _Orchestrator_RegisterTriggerAgent_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "RegisterPollerAgent",
			Handler:       _Orchestrator_RegisterPollerAgent_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "RegisterShutdownListener",
			Handler:       _Orchestrator_RegisterShutdownListener_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "RegisterDataStoreConnectionTestAgent",
			Handler:       _Orchestrator_RegisterDataStoreConnectionTestAgent_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "proto/orchestrator.proto",
}
