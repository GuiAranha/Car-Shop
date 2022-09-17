// template para criação dos testes de cobertura da camada de controller


import * as sinon from 'sinon';
import chai from 'chai';
import Cars from '../../../models/cars.model';
import CarsService from '../../../services/cars.services';
import { carMock, carMockId } from '../mocks/car.mocks';
import { Request, Response } from 'express';
import CarsController from '../../../controllers/cars.controller';
const { expect } = chai;

describe('Testes camada controller de cars', () => {

  const carsModel = new Cars();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  const req = {} as Request;
  const res = {} as Response;

  it('Cria novo carro', async () => {
    sinon.stub(carsModel, 'create').resolves(carMockId);
    req.body = carMockId;
    await carsController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  });
  it('Lista todos os carros', async () => {
    sinon.stub(carsModel, 'read').resolves([carMockId]);
    await carsController.read(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith([carMockId])).to.be.true;
  });
  it('Lista carro pelo ID', async () => {
    sinon.stub(carsModel, 'readOne').resolves(carMockId);
    req.params = { id: carMockId._id };
    await carsController.readOne(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  });
  it('Atualiza um carro', async () => {
    sinon.stub(carsModel, 'update').resolves(carMockId);
    req.params = { id: carMockId._id };
    req.body = carMock;
    await carsController.update(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
  });
  it('Remove um carro', async () => {
    sinon.stub(carsModel, 'delete').resolves(carMockId);
    req.params = { id: carMockId._id };
    await carsController.delete(req, res);

    expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
  });
});