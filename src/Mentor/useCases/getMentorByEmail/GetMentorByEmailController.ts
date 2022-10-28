// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetMentorByEmailUseCase } from './GetMentorByEmailUseCase';

export class GetMentorByEmailController {
  private getMentorByEmailUseCase: GetMentorByEmailUseCase;

  constructor(
    getMentorByEmailUseCase: GetMentorByEmailUseCase
  ) {
    this.getMentorByEmailUseCase = getMentorByEmailUseCase;
  }

  async handle(request: Request, response: Response) {
    const { email } = request.params;

    if (!email ){
      console.log('Mentor missing');
      return response.status(404).json('Mentor missing'); 
    }

    const registredMentor = await this.getMentorByEmailUseCase.execute(email);

    if (registredMentor === null) {
      console.log('Get mentor by email execute return null');
      return response.status(500).json(registredMentor);
    }

    return response.status(200).json(registredMentor);
  }
}