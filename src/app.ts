//manipular o express
import express from 'express'; //biblioteca pra manipular http
import { router } from './routes';

const app = express();
app.use(express.json()); //express ler em json

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(router);

export { app }