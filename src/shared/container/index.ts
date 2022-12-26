import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/interfaces/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
