import { container } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { ICategoriesRepository } from "@modules/cars/interfaces/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/interfaces/ISpecificationsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/implementations/SpecificationsRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
