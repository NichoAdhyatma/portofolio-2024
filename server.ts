import next from 'next';
import { createServer } from "node:http";
import socketIO, { Server as SocketIOServer, Socket } from 'socket.io';

const dev: boolean = process.env.NODE_ENV !== 'production';
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });

const handler = app.getRequestHandler();

app.prepare().then(async () => {
    const httpServer = createServer(handler);
    const io: SocketIOServer = new socketIO.Server(httpServer);

    io.on('connection', (socket: Socket) => {
        console.log('Client connected');

        socket.on('message1', (data: any) => {
            console.log('Received from API ::', data);
            io.emit('message2', data);
        });
    });

    httpServer.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
