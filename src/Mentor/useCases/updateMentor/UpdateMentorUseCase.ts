import { IMentor } from '../../entities/Mentor';
import { IUpdateMentorRequest } from './IUpdateMentorRequest';
import { IMentorRepository } from '../../repositories/IMentorRepository';

export class UpdateMentorUseCase {
  private mentorRepository: IMentorRepository;

  constructor(mentorRepository: IMentorRepository) {
    this.mentorRepository = mentorRepository;
  }

  async execute(requestData: IUpdateMentorRequest, uuid: string): Promise<IMentor | Error> {
    try {
      const newMentor: IMentor = {
        uuid: uuid,
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
      console.log(newMentor)
      return this.mentorRepository.update(newMentor, uuid);
    } catch (error: any) {
      console.log(error);
      return new Error(error)
    }
  }
}