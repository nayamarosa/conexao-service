// conexao da requisição que vai para api com o use case
import { Request, Response } from "express";
import { GetMentorByUuidUseCase } from './GetMentorByUuidUseCase';

export class GetMentorByUuidController {
  private getMentorByUuidUseCase: GetMentorByUuidUseCase;

  constructor(
    getMentorByUuidUseCase: GetMentorByUuidUseCase
  ) {
    this.getMentorByUuidUseCase = getMentorByUuidUseCase;
  }

  async handle(request: Request, response: Response) {
    const { uuid } = request.params;

    if (!uuid ){
      console.log('Mentor missing');
      return response.status(404).json('Mentor missing'); 
    }

    const registredMentor = await this.getMentorByUuidUseCase.execute(uuid);

    if (!registredMentor) {
      console.log('Get mentor by uuid execute return null');
      return response.status(500).json('Get mentor by uuid not possible');
      //erro da api
    }

    return response.status(200).json(registredMentor);
  }
}