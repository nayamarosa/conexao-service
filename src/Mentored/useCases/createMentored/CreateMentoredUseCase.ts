import { IMentored } from '../../entities/Mentored';
import { ICreateMentoredRequest } from './ICreateMentoredRequest';
import { IMentoredRepository } from '../../repositories/IMentoredRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreateMentoredUseCase {
  private mentoredRepository: IMentoredRepository;

  constructor(mentoredRepository: IMentoredRepository) {
    this.mentoredRepository = mentoredRepository;
  }

  async execute(requestData: ICreateMentoredRequest): Promise<IMentored | null> {
    try {
      const newMentored: IMentored = {
        uuid: uuidv4(),
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
      return this.mentoredRepository.create(newMentored);
      return newMentored;
    } catch (error) {
      console.log(error);
      return null
    }
  }
}