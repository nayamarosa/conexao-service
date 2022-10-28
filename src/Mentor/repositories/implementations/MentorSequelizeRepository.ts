import { Mentored } from '../../../Mentored/repositories/model/Mentored';
import { IMentor } from '../../entities/Mentor';
import { IMentorRepository } from '../IMentorRepository';
import { Mentor } from '../model/Mentor';

export class MentorSequelizeRepository implements IMentorRepository {
  create(newMentor: IMentor) {
    try {
      return Mentor.create(newMentor).then((result: any) => {
        console.log(result);
        return newMentor;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getByUuid(uuid: string) {
    try {
      return Mentor.findByPk(uuid, {include: [Mentored]}).then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getByEmail(email: string) {
    try {
      return Mentor.findOne({where: {email: email},include: [Mentored]}).then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAll() {
    try {
      return Mentor.findAll().then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  update(newMentor: IMentor) {
    try {
      return Mentor.update(newMentor, {where: {uuid: newMentor.uuid}}).then((result: any) => {
        console.log(result);
        return newMentor;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}