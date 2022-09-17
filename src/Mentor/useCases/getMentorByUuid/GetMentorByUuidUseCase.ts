import { IMentor } from '../../entities/Mentor';
import { IMentorRepository } from "../../repositories/IMentorRepository";

export class GetMentorByUuidUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(uuid: string): Promise<IMentor | null> {
    try {
      return this.mentorRepository.getByUuid(uuid);
    } catch (error) {
      console.log(error);
      return null
    }
  }
}