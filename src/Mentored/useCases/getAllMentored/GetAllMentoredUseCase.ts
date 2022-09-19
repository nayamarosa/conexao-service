import { IMentored } from '../../entities/Mentored';
import { IMentoredRepository } from "../../repositories/IMentoredRepository";
import { v4 as uuidv4 } from 'uuid';

export class GetAllMentoredUseCase {
  private mentoredRepository: IMentoredRepository;

  constructor(mentoredRepository: IMentoredRepository) {
    this.mentoredRepository = mentoredRepository;
  }

  async execute(): Promise<IMentored[] | null> {
    try {
      return this.mentoredRepository.getAll();
    } catch (error) {
      console.log(error);
      return null
    }
  }
}