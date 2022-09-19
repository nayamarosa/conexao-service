// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetMentoredByUuidUseCase } from './GetMentoredByUuidUseCase';

export class GetMentoredByUuidController {
  private getMentoredByUuidUseCase: GetMentoredByUuidUseCase;

  constructor(
    getMentoredByUuidUseCase: GetMentoredByUuidUseCase
  ) {
    this.getMentoredByUuidUseCase = getMentoredByUuidUseCase;
  }

  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    if (!uuid ){
      console.log('Mentored missing');
      return response.status(404).json('Mentored missing'); 
    }

    const registredMentored = await this.getMentoredByUuidUseCase.execute(uuid);

    if (!registredMentored) {
      console.log('Get mentored by uuid execute return null');
      return response.status(500).json('Get mentored by uuid not possible');
      //erro da api
    }

    return response.status(200).json(registredMentored);
  }
}