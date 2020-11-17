# Simple gRPC example
Containerized gRPC-web demo using
- Enovy (Proxy)
- .Net Core (gRPC server)
- React (gRPC-Web client)
- Nginx (React app hosting)
------------
### Architecture
Browser(Client)  ---------- Envoy ---------- gRPC Server <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ ------------ React app

------------
### Prerequisite
1. docker
2. docker-compose

------------

### Start the project
`docker-compose up -d`    *(Privilege mode required as it binds port 80.)*

------------
### Stop the project
`docker-compose down`

------------
### Change and compile the proto
1. Download the protobuf compiler: https://github.com/protocolbuffers/protobuf/releases/
2. Download the plugin for grpc-web: https://github.com/grpc/grpc-web/releases
3. ***protoc.exe*** , ***protoc-gen-grpc-web.exe*** and ****.proto*** are placed into same directory.
4. Compile the proto by: <br/>
`protoc grpc-service.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.`


