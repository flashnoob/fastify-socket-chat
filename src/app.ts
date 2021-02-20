import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import fastifyIo from 'fastify-socket.io';
import redis from "redis";
import fasifyCors from 'fastify-cors';
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: !!(process.env.NODE_ENV !== "development"),
})
export const redisClient = redis.createClient();

server.register(fastifyIo, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"], credentials: true }, allowEIO3: true
})
server.register(fasifyCors, {
})


export const FastifyServer = () => {
  server.io
  return server;
};





