// conexao da requisição que vai para api com o use case
import { Request, Response } from 'express';
import { CreateMentorUseCase } from './CreateMentorUseCase';
import { ICreateMentorRequest } from './ICreateMentorRequest';

export class CreateMentorController {
  private createMentorUseCase: CreateMentorUseCase;

  constructor(
    createMentorUseCase: CreateMentorUseCase
  ) {
    this.createMentorUseCase = createMentorUseCase;
  }

  async handle(request: Request, response: Response) {
    const { name, email, password, age, document, profession, practiceArea, practiceTime, education, userType} = request.body;

    if (!name || !email || !password || !userType){
      console.log('Invalid request');
      return response.status(404).json('Invalid Request'); 
    }

    const newMentorFromRequest: ICreateMentorRequest = {name, email, password, age, document, profession, practiceArea, practiceTime, education, userType};

    const createdMentor = await this.createMentorUseCase.execute(newMentorFromRequest);

    if (!createdMentor) {
      console.log('Create Mentor execute returned null');
      return response.status(500).json('Creation of mentor was not possible');
      //erro da api
    }

    return response.status(200).json(createdMentor);
  }
}