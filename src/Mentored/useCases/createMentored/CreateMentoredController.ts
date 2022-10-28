// conexao da requisição que vai para api com o use case
import { Request, Response } from 'express';
import { CreateMentoredUseCase } from './CreateMentoredUseCase';
import { ICreateMentoredRequest } from './ICreateMentoredRequest';

export class CreateMentoredController {
  private createMentoredUseCase: CreateMentoredUseCase;

  constructor(
    createMentoredUseCase: CreateMentoredUseCase
  ) {
    this.createMentoredUseCase = createMentoredUseCase;
  }

  async handle(request: Request, response: Response) {
    const { name, email, password, age, document, profession, interestArea, education, userType, mentorshipGoal} = request.body;

    console.log(request.body);

    if (!name || !email || !password || !userType){
      console.log('Invalid request');
      return response.status(404).json('Invalid Request'); 
    }

    const mentorUuid = null

    
    const newMentoredFromRequest: ICreateMentoredRequest = {name, email, password, age, document, profession, interestArea, education, userType, mentorshipGoal, mentorUuid};

    const createdMentored = await this.createMentoredUseCase.execute(newMentoredFromRequest);

    if (createdMentored === null) {
      console.log('Create Mentored execute returned null');
      return response.status(500).json(createdMentored);
      //erro da api
    }

    return response.status(200).json(createdMentored);
  }
}