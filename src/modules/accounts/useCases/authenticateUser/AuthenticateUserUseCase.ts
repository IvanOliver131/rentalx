import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IRequestDTO } from "../../dtos/IRequestDTO";
import { IResponseDTO } from "../../dtos/IResponseDTO";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequestDTO): Promise<IResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!", 401);
    }

    // Gerar JWT - é bom deixar essa chave nas variáveis de ambiente/env
    const token = sign({}, "a72d958a4f02f933bae78148cd7e02e4", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponseDTO = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}
export { AuthenticateUserUseCase };
