"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastifyServer = exports.redisClient = void 0;
var fastify_1 = __importDefault(require("fastify"));
var fastify_socket_io_1 = __importDefault(require("fastify-socket.io"));
var redis_1 = __importDefault(require("redis"));
var fastify_cors_1 = __importDefault(require("fastify-cors"));
var server = fastify_1.default({
    logger: !!(process.env.NODE_ENV !== "development"),
});
exports.redisClient = redis_1.default.createClient();
server.register(fastify_socket_io_1.default, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"], credentials: true }, allowEIO3: true
});
server.register(fastify_cors_1.default, {});
var FastifyServer = function () {
    server.io;
    return server;
};
exports.FastifyServer = FastifyServer;
//# sourceMappingURL=app.js.map