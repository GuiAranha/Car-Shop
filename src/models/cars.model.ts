import { model as mongooseCreateMode, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar'; 
import MongoModel from './mongo.model';

const carsMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
  status: Boolean,
}, { versionKey: false });

export default class Cars extends MongoModel<ICar> {
  constructor(model = mongooseCreateMode('Cars', carsMongooseSchema)) {
    super(model);
  }
}