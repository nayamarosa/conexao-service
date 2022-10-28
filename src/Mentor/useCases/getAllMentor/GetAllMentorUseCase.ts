import { IMentor } from '../../entities/Mentor';
import { IMentorRepository } from "../../repositories/IMentorRepository";
import { v4 as uuidv4 } from 'uuid';

export class GetAllMentorUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(): Promise<IMentor[] | Error> {
    try {
      return this.mentorRepository.getAll();
    } catch (error: any) {
      console.log(error);
      return new Error(error)
    }
  }
}