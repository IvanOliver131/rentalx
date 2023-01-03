import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateuserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password, driver_license }: ICreateuserDTO) {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
