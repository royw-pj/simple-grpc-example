using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace GrpcServerDemo
{
    public class GrpcTestingService : GrpcTesting.GrpcTestingBase
    {
        private static Random random = new Random();
        private readonly ILogger<GrpcTestingService> logger;
        public GrpcTestingService(ILogger<GrpcTestingService> logger)
        {
            this.logger = logger;
        }
        public override async Task BidirectionalStreaming(IAsyncStreamReader<CodeRequest> reader, IServerStreamWriter<QuoteResponse> responseStream, ServerCallContext context)
        {
            while (await reader.MoveNext())
            {
                await responseStream.WriteAsync(new QuoteResponse
                {
                    Code = reader.Current.Code,
                    Price = new Price
                    {
                        Open = random.Next(1, 10),
                        High = random.Next(1, 10),
                        Low = random.Next(1, 10),
                        Close = random.Next(1, 10),
                    }
                });
                await Task.Delay(150);
            }
        }
        public override async Task<ProductDetailResponse> GetProductDetail(CodeRequest request, ServerCallContext context)
        {
            return await Task.FromResult<ProductDetailResponse>(new ProductDetailResponse
            {
                Code = request.Code,
                Description = "this is description " + random.Next(100, 300),
                Name = "this is name"
            });
        }
        public override async Task SubscribeQuote(CodeRequest request, IServerStreamWriter<QuoteResponse> responseStream, ServerCallContext context)
        {
            int i = 0;
            while (true)
            {
                await responseStream.WriteAsync(new QuoteResponse
                {
                    Code = request.Code,
                    Price = new Price
                    {
                        Open = i++,
                        High = random.Next(10, 100),
                        Low = random.Next(10, 100),
                        Close = random.Next(10, 100),
                    }
                });
                await Task.Delay(10);
            }
        }
    }
}
