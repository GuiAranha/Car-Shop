import { IService } from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import HandleError from '../utils/handleError';

export default class CarsService implements IService<ICar> {
  private car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this.car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw new HandleError(400, 'Invalid fields');
    return this.car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this.car.read();
  }

  public async readOne(id: string): Promise<ICar | null> {
    if (id.length < 24) throw new HandleError(400, 'Id must have 24 hexadecimal characters');
    const data = await this.car.readOne(id);
    if (!data) throw new HandleError(404, 'Object not found');
    return data;
  }

  public async delete(_id: string): Promise<void> {
    await this.readOne(_id);
    this.car.delete(_id);
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw new HandleError(400, 'Invalid fields');

    await this.readOne(_id);

    const updated = await this.car.update(_id, obj);
    return updated;
  }
}