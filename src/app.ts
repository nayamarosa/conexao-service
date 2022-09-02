//manipular o express
import express from 'express'; //biblioteca pra manipular http
import { router } from './routes';

const app = express();
app.use(express.json()); //express ler em json
app.use(router);

export { app }