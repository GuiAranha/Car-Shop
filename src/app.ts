import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/erro.middleware';
import carsRouter from './routers/cars.router';

const app = express();

app.use(express.json());

app.use('/cars', carsRouter);
app.use(errorMiddleware);

export default app;
