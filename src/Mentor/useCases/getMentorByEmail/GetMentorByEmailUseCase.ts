import { IMentor } from '../../entities/Mentor';
import { IMentorRepository } from "../../repositories/IMentorRepository";

export class GetMentorByEmailUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(email: string): Promise<IMentor | Error> {
    try {
      return this.mentorRepository.getByEmail(email);
    } catch (error : any) {
      console.log(error);
      return new Error(error)
    }
  }
}