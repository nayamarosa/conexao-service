// conexao da requisição que vai para api com o use case
import { Request, Response } from 'express';
import { UpdateMentoredUseCase } from './UpdateMentoredUseCase';
import { IUpdateMentoredRequest } from './IUpdateMentoredRequest';

export class UpdateMentoredController {
  private updateMentoredUseCase: UpdateMentoredUseCase;

  constructor(
    updateMentoredUseCase: UpdateMentoredUseCase
  ) {
    this.updateMentoredUseCase = updateMentoredUseCase;
  }

  async handle(request: Request, response: Response) {
    const { name, email, password, age, document, profession, interestArea, education, userType, mentorshipGoal} = request.body;
    const { uuid } = request.params;

    if (!name || !email || !password || !userType){
      console.log('Invalid request');
      return response.status(404).json('Invalid Request'); 
    }

    const updateMentoredFromRequest: IUpdateMentoredRequest = { name, email, password, age, document, profession, interestArea, education, userType, mentorshipGoal};

    const updatedMentor = await this.updateMentoredUseCase.execute(updateMentoredFromRequest, uuid);

    if (!updatedMentor) {
      console.log('Create Mentor execute returned null');
      return response.status(500).json('Creation of mentor was not possible');
      //erro da api
    }

    return response.status(200).json(updatedMentor);
  }
}