import express from 'express';
import erroMiddleware from './middlewares/erro.middleware';

const app = express();

app.use(erroMiddleware);

export default app;
