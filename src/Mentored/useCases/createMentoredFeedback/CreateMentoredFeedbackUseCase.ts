import { IMentored } from '../../entities/Mentored';
import { IMentoredRepository } from '../../repositories/IMentoredRepository';


export class CreateMentoredFeedbackUseCase {
    private mentoredRepository: IMentoredRepository

    constructor(mentoredRepository: IMentoredRepository){
        this.mentoredRepository = mentoredRepository
    }

    async execute(uuid: string, feedback: string): Promise<IMentored | Error>{
        try {

           const mentorado = await this.mentoredRepository.createFeedback(uuid, feedback)
           console.log("*******************MENTORADO");
           console.log(mentorado);
           return mentorado 
        } catch (error : any) {
            console.log(error)
            return new Error(error)
        }
    }
}