import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    // verificamos se existe um user avatar antes de deletar
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
