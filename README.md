# Simple gRPC example
Containerized gRPC-web demo using
- Enovy (Proxy)
- .Net Core (gRPC server)
- React (gRPC-Web client)
- Nginx (React app hosting)
------------
### Architecture
Browser(Client) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
Envoy ---------- gRPC Server <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  <br/>
React app

------------
### Prerequisite
1. docker
2. docker-compose

------------
# How to?
### a) Start the project
1. `docker-compose up -d` *(Privilege mode may be required)*
2. Go to `http://localhost/`, 
  or `http://192.168.99.100/` when using Docker Desktop on win7

------------
### b) Stop the project
`docker-compose down`

------------
### c) Change and compile the proto
1. Download the protobuf compiler: https://github.com/protocolbuffers/protobuf/releases/
2. Download the plugin for grpc-web: https://github.com/grpc/grpc-web/releases
3. ***protoc.exe*** , ***protoc-gen-grpc-web.exe*** and ****.proto*** are placed into same directory.
4. Compile the proto by: <br/>
`protoc grpc-service.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.`


