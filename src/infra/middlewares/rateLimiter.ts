import { NextFunction, Response, Request } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';

export async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const redisClient = new Redis({
    port: Number(process.env.REDIS_PORT),
    host: String(process.env.REDIS_HOST),
    db: Number(process.env.REDIS_DB),
    family: 4,
  });

  redisClient.on('error', error => {
    console.log(error);
  });

  const rateLimiterRedis = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'ratelimit',
    points: 5,
    duration: 5,
  });

  try {
    await rateLimiterRedis.consume(request.ip);
    return next();
  } catch (error) {
    return response.status(429).json({
      status: 'error',
      message: 'Too many requests',
    });
  }
}
