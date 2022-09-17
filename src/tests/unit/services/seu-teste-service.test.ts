import * as sinon from 'sinon';
import chai from 'chai';
import Cars from '../../../models/cars.model';
import CarsService from '../../../services/cars.services';
import { ICar } from '../../../interfaces/ICar';
import { carMock, carMockId } from '../mocks/car.mocks';

const { expect } = chai;

describe('Testes camada service de cars', () => {

  const carsModel = new Cars();
  const carsService = new CarsService(carsModel);

  /* before(async () => {
    sinon
      .stub()
      .resolves();
  }); */

  after(()=>{
    sinon.restore();
  })

  it('Cria novo carro', async () => {
    sinon.stub(carsModel, 'create').resolves(carMockId)
    const data = await carsService.create(carMockId);
    expect(data).to.be.deep.equal(carMockId);
  });
  it('Lista todos carro', async () => {
    sinon.stub(carsModel, 'read').resolves([carMockId])
    const data = await carsService.read();
    expect(data).to.be.deep.equal([carMockId]);
  });
  it('Lista carro pelo Id', async () => {
    sinon.stub(carsModel, 'readOne').resolves(carMockId)
    const data = await carsService.readOne(carMockId._id);
    expect(data).to.be.deep.equal(carMockId);
  });
  it('Atualiza um carro', async () => {
    sinon.stub(carsModel, 'update').resolves(carMockId)
    const data = await carsService.update(carMockId._id, carMock);
    expect(data).to.be.deep.equal(carMockId);
  });
});