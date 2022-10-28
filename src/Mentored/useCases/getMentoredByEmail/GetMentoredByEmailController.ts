// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetMentoredByEmailUseCase } from './GetMentoredByEmailUseCase';

export class GetMentoredByEmailController {
  private getMentoredByEmailUseCase: GetMentoredByEmailUseCase;

  constructor(
    getMentoredByEmailUseCase: GetMentoredByEmailUseCase
  ) {
    this.getMentoredByEmailUseCase = getMentoredByEmailUseCase;
  }

  async handle(request: Request, response: Response) {
    const { email } = request.params;

    if (!email ){
      console.log('Mentored missing');
      return response.status(404).json('Mentored missing'); 
    }

    const registredMentored = await this.getMentoredByEmailUseCase.execute(email);

    if (registredMentored === null) {
      console.log('Get mentored by uuid execute return null');
      return response.status(500).json(registredMentored);
    }

    return response.status(200).json(registredMentored);
  }
}