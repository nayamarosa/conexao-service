import { IMentor } from '../../entities/Mentor';
import { IMentorRepository } from "../../repositories/IMentorRepository";

export class GetMentorByUuidUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(uuid: string): Promise<IMentor | Error> {
    try {
      return this.mentorRepository.getByUuid(uuid);
    } catch (error : any) {
      console.log(error);
      return new Error(error)
    }
  }
}