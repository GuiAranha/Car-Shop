import { Router } from 'express';
import CarsController from '../controllers/cars.controller';
import CarsService from '../services/cars.services';
import Cars from '../models/cars.model';

const carsModel = new Cars();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

const carsRouter = Router();
carsRouter.post('/', (req, res) => carsController.create(req, res));
carsRouter.get('/', (req, res) => carsController.read(req, res));
carsRouter.get('/:id', (req, res) => carsController.readOne(req, res));
carsRouter.delete('/:id', (req, res) => carsController.delete(req, res));
carsRouter.put('/:id', (req, res) => carsController.update(req, res));

export default carsRouter;