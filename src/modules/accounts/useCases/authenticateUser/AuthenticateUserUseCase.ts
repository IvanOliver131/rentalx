import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject } from "tsyringe";

import { IRequestDTO } from "../../dtos/IRequestDTO";
import { IResponseDTO } from "../../dtos/IResponseDTO";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequestDTO): Promise<IResponseDTO> {
    // Usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    // Senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    // Gerar JWT - é bom deixar essa chave nas variáveis de ambiente/env
    const token = sign({}, "a72d958a4f02f933bae78148cd7e02e4", {
      subject: user.id,
      expiresIn: "1d",
    });

    return { user, token };
  }
}
export { AuthenticateUserUseCase };
