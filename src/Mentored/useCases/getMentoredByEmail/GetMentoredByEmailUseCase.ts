import { IMentored } from '../../entities/Mentored';
import { IMentoredRepository } from "../../repositories/IMentoredRepository";

export class GetMentoredByEmailUseCase {
  private mentoredRepository: IMentoredRepository;

  constructor(mentoredRepository: IMentoredRepository) {
    this.mentoredRepository = mentoredRepository;
  }

  async execute(email: string): Promise<IMentored | Error> {
    try {
      return this.mentoredRepository.getByEmail(email);
    } catch (error : any) {
      console.log(error);
      return new Error()
    }
  }
}