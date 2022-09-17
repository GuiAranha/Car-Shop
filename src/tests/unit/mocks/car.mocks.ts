import { ICar } from '../../../interfaces/ICar';

export const carMock: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockId :ICar & { _id: string } = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
  _id: "123456789012345678901234"
}