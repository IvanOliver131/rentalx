/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(request: Request, response: Response) {
    this.listCategoriesUseCase.execute();

    return response.json();
  }
}

export { ListCategoriesController };
