import { ICreateuserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateuserDTO): Promise<void>;
}

export { IUsersRepository };
