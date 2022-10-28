import { IMentor } from '../../entities/Mentor';
import { ICreateMentorRequest } from './ICreateMentorRequest';
import { IMentorRepository } from '../../repositories/IMentorRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreateMentorUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(requestData: ICreateMentorRequest): Promise<IMentor | Error> {
    try {
      const newMentor: IMentor = {
        uuid: uuidv4(),
        email: requestData.email,
        password: requestData.password,
        name: requestData.name,
        age: requestData.age,
        document: requestData.document,
        profession: requestData.profession,
        practiceArea: requestData.practiceArea,
        practiceTime: requestData.practiceTime,
        education: requestData.education,
        userType: requestData.userType,
      }
      return this.mentorRepository.create(newMentor);
    } catch (error: any) {
      console.log(error);
      return new Error(error)
    }
  }
}