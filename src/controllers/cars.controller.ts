import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarsController {
  constructor(private service: IService<ICar>) {
  }

  async create(req: Request, res: Response): Promise<Response | void> {
    const data = await this.service.create(req.body);
    return res.status(201).json(data);
  }

  async read(req: Request, res: Response): Promise<Response> {
    const data = await this.service.read();
    return res.status(200).json(data);
  }

  async readOne(req: Request, res: Response): Promise<Response> {
    const data = await this.service.readOne(req.params.id);
    return res.status(200).json(data);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const data = await this.service.update(req.params.id, req.body);
    return res.status(200).json(data);
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    await this.service.delete(req.params.id);
    return res.status(204).json();
  }
}