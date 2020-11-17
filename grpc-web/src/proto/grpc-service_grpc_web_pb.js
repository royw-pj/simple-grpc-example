/**
 * @fileoverview gRPC-Web generated client stub for quote
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.quote = require('./grpc-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.quote.GrpcTestingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.quote.GrpcTestingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.CodeRequest,
 *   !proto.quote.QuoteResponse>}
 */
const methodDescriptor_GrpcTesting_SubscribeQuote = new grpc.web.MethodDescriptor(
  '/quote.GrpcTesting/SubscribeQuote',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.quote.CodeRequest,
  proto.quote.QuoteResponse,
  /**
   * @param {!proto.quote.CodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.QuoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.quote.CodeRequest,
 *   !proto.quote.QuoteResponse>}
 */
const methodInfo_GrpcTesting_SubscribeQuote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.quote.QuoteResponse,
  /**
   * @param {!proto.quote.CodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.QuoteResponse.deserializeBinary
);


/**
 * @param {!proto.quote.CodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quote.QuoteResponse>}
 *     The XHR Node Readable Stream
 */
proto.quote.GrpcTestingClient.prototype.subscribeQuote =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quote.GrpcTesting/SubscribeQuote',
      request,
      metadata || {},
      methodDescriptor_GrpcTesting_SubscribeQuote);
};


/**
 * @param {!proto.quote.CodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quote.QuoteResponse>}
 *     The XHR Node Readable Stream
 */
proto.quote.GrpcTestingPromiseClient.prototype.subscribeQuote =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quote.GrpcTesting/SubscribeQuote',
      request,
      metadata || {},
      methodDescriptor_GrpcTesting_SubscribeQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.CodeRequest,
 *   !proto.quote.ProductDetailResponse>}
 */
const methodDescriptor_GrpcTesting_GetProductDetail = new grpc.web.MethodDescriptor(
  '/quote.GrpcTesting/GetProductDetail',
  grpc.web.MethodType.UNARY,
  proto.quote.CodeRequest,
  proto.quote.ProductDetailResponse,
  /**
   * @param {!proto.quote.CodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.ProductDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.quote.CodeRequest,
 *   !proto.quote.ProductDetailResponse>}
 */
const methodInfo_GrpcTesting_GetProductDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.quote.ProductDetailResponse,
  /**
   * @param {!proto.quote.CodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.ProductDetailResponse.deserializeBinary
);


/**
 * @param {!proto.quote.CodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.quote.ProductDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.ProductDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.GrpcTestingClient.prototype.getProductDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.GrpcTesting/GetProductDetail',
      request,
      metadata || {},
      methodDescriptor_GrpcTesting_GetProductDetail,
      callback);
};


/**
 * @param {!proto.quote.CodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.ProductDetailResponse>}
 *     Promise that resolves to the response
 */
proto.quote.GrpcTestingPromiseClient.prototype.getProductDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.GrpcTesting/GetProductDetail',
      request,
      metadata || {},
      methodDescriptor_GrpcTesting_GetProductDetail);
};


module.exports = proto.quote;

