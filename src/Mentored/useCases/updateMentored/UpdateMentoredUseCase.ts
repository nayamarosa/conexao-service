import { IMentored } from '../../entities/Mentored';
import { IUpdateMentoredRequest } from './IUpdateMentoredRequest';
import { IMentoredRepository } from '../../repositories/IMentoredRepository';
import { v4 as uuidv4 } from 'uuid';

export class UpdateMentoredUseCase {
  private mentoredRepository: IMentoredRepository;

  constructor(mentoredRepository: IMentoredRepository) {
    this.mentoredRepository = mentoredRepository;
  }

  async execute(requestData: IUpdateMentoredRequest, uuid: string): Promise<IMentored | null> {
    try {
      const newMentor: IMentored = {
        uuid: uuid,
        email: requestData.email,
        password: requestData.password,
        name: requestData.name,
        age: requestData.age,
        document: requestData.document,
        profession: requestData.profession,
        interestArea: requestData.interestArea,
        education: requestData.education,
        userType: requestData.userType,
        mentorshipGoal: requestData.mentorshipGoal,
      }
      console.log(newMentor)
      return this.mentoredRepository.update(newMentor, uuid);
    } catch (error) {
      console.log(error);
      return null
    }
  }
}