import { Request, Response } from 'express';
import { CreateMentoredFeedbackUseCase } from './CreateMentoredFeedbackUseCase';
import { CreateMentoredFeedbackRequest } from './CreateMentoredFeedbackRequest';

export class CreateMentoredFeedbackController {
    private createMentoredFeedBackUseCase : CreateMentoredFeedbackUseCase;

    constructor(createMentoredFeedBackUseCase : CreateMentoredFeedbackUseCase){
        this.createMentoredFeedBackUseCase = createMentoredFeedBackUseCase
    }

    async handle(request: Request, response: Response){
        const uuid = request.params.uuid;
        const feedBack = request.body.feedback
        if(!uuid || !feedBack){
            console.log('Invalid request');
            return response.status(404).json('Invalid Request'); 
        }
    
        const createdNewFeedBack = await this.createMentoredFeedBackUseCase.execute(uuid, feedBack);

        if(createdNewFeedBack === null){
            console.log('Create new Feedback execute returned null');
            return response.status(500).json('esse feedback Já existe');
        }

        return response.status(200).json(createdNewFeedBack);
    }
}