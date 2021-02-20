import { User } from 'src/@types/socket.type';
import { FastifyServer, redisClient } from '../../app';
import isEmpty from 'lodash.isempty'
const fastify = FastifyServer()

export const addUser = ({ id, name, room }: User) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    try {

        const user = { id, name, room };
        if ((getUser(name))) {
            throw (`User exists`);
        }
        redisClient.set(name, JSON.stringify(user), (err: any) => {
            if (err) {
                throw err;
            }
            return user;
        })
    } catch (error) {

    }


};

export const removeUser = (id: string) => {
    redisClient.del(id);

};


export const getUser = (name: string) => {
    return redisClient.get(name)

};
export const getUsersInRoom = () => {
    return fastify

};
