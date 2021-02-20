"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersInRoom = exports.getUser = exports.removeUser = exports.addUser = void 0;
var app_1 = require("../../app");
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var fastify = app_1.FastifyServer();
var addUser = function (_a) {
    var id = _a.id, name = _a.name, room = _a.room;
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    var user = { id: id, name: name, room: room };
    var usr = exports.getUser(name);
    if (!lodash_isempty_1.default(usr)) {
        throw new Error("User exists");
    }
    app_1.redisClient.set(name, JSON.stringify(user), function (err) {
        if (err) {
            throw err;
        }
        return user;
    });
};
exports.addUser = addUser;
var removeUser = function (id) {
    app_1.redisClient.del(id);
};
exports.removeUser = removeUser;
var getUser = function (name) {
    return app_1.redisClient.get(name);
};
exports.getUser = getUser;
var getUsersInRoom = function () {
    return fastify;
};
exports.getUsersInRoom = getUsersInRoom;
//# sourceMappingURL=user.helper.js.map