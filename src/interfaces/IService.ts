export interface IService<T> {
  create(obj:T): Promise<T>
  readOne(id: string): Promise<T | null>
  read(): Promise<T[]>
  delete(id: string): Promise<T | null>
  update(id: string, obj: T): Promise<T | null>
}