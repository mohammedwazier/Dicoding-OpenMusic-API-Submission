import { Server, Request, ResponseToolkit } from '@hapi/hapi';
import { PORT, HOST } from './Config/config';
import API from './API/API';

const INIT = async () => {
    const server: Server = new Server({
        port: PORT,
        host: HOST
    })

    server.route(API);

    server.route({
        method: '*',
        path: '/{p*}',
        handler: (req: Request, h: ResponseToolkit) => {
            return h.response({
                status: 'fail',
                message: 'Route Not Found'
            }).code(404)
        }
    })

    await server.start();
    console.log(`Server Starting on : ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1)
})

INIT();

export default INIT;