import { IMentored } from '../../entities/Mentored';
import { IMentoredRepository } from "../../repositories/IMentoredRepository";

export class GetMentoredByUuidUseCase {
  private mentoredRepository: IMentoredRepository;

  constructor(mentoredRepository: IMentoredRepository) {
    this.mentoredRepository = mentoredRepository;
  }

  async execute(uuid: string): Promise<IMentored | null> {
    try {
      return this.mentoredRepository.getByUuid(uuid);
    } catch (error) {
      console.log(error);
      return null
    }
  }
}