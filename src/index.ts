import http from 'http';
import ExpressAppFactory from './presentation/express';

const PORT = Number(process.env.PORT) || 3000;
const app = ExpressAppFactory.createApp();

http.createServer(app).listen(PORT, () => console.log(`server listening at ${PORT} 🚀`));
