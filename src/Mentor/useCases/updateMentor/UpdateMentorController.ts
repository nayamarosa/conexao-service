// conexao da requisição que vai para api com o use case
import { Request, Response } from 'express';
import { UpdateMentorUseCase } from './UpdateMentorUseCase';
import { IUpdateMentorRequest } from './IUpdateMentorRequest';

export class UpdateMentorController {
  private updateMentorUseCase: UpdateMentorUseCase;

  constructor(
    updateMentorUseCase: UpdateMentorUseCase
  ) {
    this.updateMentorUseCase = updateMentorUseCase;
  }

  async handle(request: Request, response: Response) {
    const { uuid, name, email, password, age, document, profession, practiceArea, practiceTime, education, userType} = request.body;

    if (!name || !email || !password || !userType){
      console.log('Invalid request');
      return response.status(404).json('Invalid Request'); 
    }

    const updateMentorFromRequest: IUpdateMentorRequest = {uuid, name, email, password, age, document, profession, practiceArea, practiceTime, education, userType};

    const updatedMentor = await this.updateMentorUseCase.execute(updateMentorFromRequest);

    if (!updatedMentor) {
      console.log('Create Mentor execute returned null');
      return response.status(500).json('Creation of mentor was not possible');
      //erro da api
    }

    return response.status(200).json(updatedMentor);
  }
}