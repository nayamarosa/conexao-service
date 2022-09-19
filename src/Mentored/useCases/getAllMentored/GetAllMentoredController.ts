// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetAllMentoredUseCase } from "./GetAllMentoredUseCase";

export class GetAllMentoredController {
  private getAllMentoredUseCase: GetAllMentoredUseCase;

  constructor(
    getAllMentoredUseCase: GetAllMentoredUseCase
  ) {
    this.getAllMentoredUseCase = getAllMentoredUseCase;
  }

  async handle(request: Request, response: Response) {
    const registredMentored = await this.getAllMentoredUseCase.execute();

    if (!registredMentored) {
      console.log('Get all mentored return null');
      return response.status(500).json('Get all mentored not possible');
      //erro da api
    }

    return response.status(200).json(registredMentored);
  }
}