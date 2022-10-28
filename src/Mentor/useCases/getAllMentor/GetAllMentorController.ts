// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetAllMentorUseCase } from "./GetAllMentorUseCase";

export class GetAllMentorController {
  private getAllMentorUseCase: GetAllMentorUseCase;

  constructor(
    getAllMentorUseCase: GetAllMentorUseCase
  ) {
    this.getAllMentorUseCase = getAllMentorUseCase;
  }

  async handle(request: Request, response: Response) {
    const registredMentor = await this.getAllMentorUseCase.execute();

    if (registredMentor === null) {
      console.log('Get all mentor return null');
      return response.status(500).json(registredMentor);
      //erro da api
    }

    return response.status(200).json(registredMentor);
  }
}