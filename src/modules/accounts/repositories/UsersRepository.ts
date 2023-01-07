import { getRepository, Repository } from "typeorm";

import { AppDataSource } from "../../../database/data-source";
import { ICreateuserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateuserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });

    return user;
  }
}

export { UsersRepository };
