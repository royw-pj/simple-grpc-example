const { GrpcTestingPromiseClient } = require('./proto/grpc-service_grpc_web_pb');
export default new GrpcTestingPromiseClient(process.env.REACT_APP_GRPC_ENDPOINT);
