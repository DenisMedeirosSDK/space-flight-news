import Redis from 'ioredis';
import { promisify } from 'util';

const redisClient = new Redis({
  port: Number(process.env.REDIS_PORT),
  host: String(process.env.REDIS_HOST),
  db: Number(process.env.REDIS_DB),
  family: 4,
});

function getRedis(value: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
}

function setRedis(key: string, value: string) {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  return syncRedisSet(key, value);
}

export { redisClient, getRedis, setRedis };
