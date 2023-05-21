import { Repository } from "typeorm";

export class BaseService<T> {
  constructor(public repository: Repository<T>) {}

  async getAll() {
    return await this.repository.find();
  }

  async create(payload: T): Promise<T> {
    const res = await this.repository.save(payload);
    return res;
  }
}
