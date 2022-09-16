import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import HandleError from '../utils/handleError';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T):Promise<T> {
    return this._model.create(obj);
  }

  public async readOne(id: string):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this._model.findOne({ id });
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async update(id: string, obj: T):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this._model.findByIdAndUpdate({ id }, { ...obj } as UpdateQuery<T>, { new: true });
  }

  public async delete(id: string):Promise<T | null> {
    if (!isValidObjectId(id)) throw new HandleError(400, 'InvalidID');
    return this._model.findByIdAndDelete({ id });
  }
}

export default MongoModel;