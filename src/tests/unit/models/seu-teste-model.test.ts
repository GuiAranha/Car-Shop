import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import Cars from '../../../models/cars.model';
import { carMock, carMockId } from '../mocks/car.mocks';

const { expect } = chai;

describe('Testes camada model de cars', () => {
  const carModel = new Cars();

  /* before(async () => {
    sinon
      .stub()
      .resolves();
  }); */

  after(()=>{
    sinon.restore();
  })

  it('Cria um carro', async () => {
    sinon.stub(Model, 'create').resolves(carMockId);
    const data = await carModel.create(carMock);
    expect(data).to.be.deep.equal(carMockId);
  });
  it('Lista todos carros', async () => {
    sinon.stub(Model, 'find').resolves([carMockId]);
    const data = await carModel.read();
    expect(data).to.be.deep.equal([carMockId]);
  });
  it('Lista carro pelo id', async () => {
    sinon.stub(Model, 'findOne').resolves(carMockId);
    const data = await carModel.create(carMock);
    expect(data).to.be.deep.equal(carMockId);
  });
  it('Atualiza um carro', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockId);
    const data = await carModel.update(carMockId._id, carMock);
    expect(data).to.be.deep.equal(carMockId);
  });
  it('Remove um carro', async () => {
    sinon.stub(Model, 'findByIdAndDelete').resolves(null);
    const data = await carModel.delete(carMockId._id);
    expect(data).to.be.null;
  });

});