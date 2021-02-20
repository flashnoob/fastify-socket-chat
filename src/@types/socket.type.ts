import { Socket } from 'dgram';


export interface SocketTypes extends Socket {
    id: string
}




export interface User {
    id: string,
    room: string,
    name: string
}