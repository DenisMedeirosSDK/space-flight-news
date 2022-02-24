import { NextFunction, Response, Request } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { redisClient } from '../database/redis';

export async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
) {
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
