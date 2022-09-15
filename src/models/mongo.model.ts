import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import HandleError from '../utils/handleError';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model = Model) {
    this.model = Model;
  }

  public async create(obj: T):Promise<T> {
    return this.model.create(obj);
  }

  public async readOne(id: string):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this.model.findOne({ id });
  }

  public async read():Promise<T[]> {
    return this.model.find();
  }

  public async update(id: string, obj: T):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this.model.findByIdAndUpdate({ id }, { ...obj } as UpdateQuery<T>, { new: true });
  }

  public async delete(id: string):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this.model.findByIdAndDelete({ id });
  }
}

export default MongoModel;