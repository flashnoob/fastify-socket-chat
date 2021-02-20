import { SocketTypes } from './@types/socket.type';
import { FastifyServer } from './app';
import { addUser } from './components/users/user.helper';
import { User } from 'src/@types/socket.type';

const PORT: number = 5000;
const server = FastifyServer();

// Fastify instance and create server.
const start = async () => {
    try {


        server.get(`/`, (req, res) => {
            res.send('ok')

        })
        await server.listen(PORT);
        console.log(`🚀  Fastify server running on port ${PORT}`);
        // console.log(`Route index: /`);
        // console.log(`Route user: /api/v1/user`);

    } catch (error) {
        console.log(error)

        server.log.error(error);
        process.exit(1);
    }
};
start();

server.ready(err => {
    if (err) throw err
    server.io.on('connection', (socket: SocketTypes) => {
        console.info('Socket connected!', socket.id)

        socket.on('join', ({ name, room }, callback) => {

            const user: User = { id: socket.id, name, room }

            let rsponse = addUser(user);
            console.log(rsponse)
            console.log(name, room)

            // TODO: Add error handler
            const error = true

            if (error) {
                callback({ 'error': 'nigga got errors' })
            }

        })

        socket.on('disconnect', () => {
            console.log(`user left.`)
        })
    });


})







