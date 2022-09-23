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
      return null;
    }
  }

  getByUuid(uuid: string) {
    try {
      return Mentor.findOne({where: {uuid: uuid}}).then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return null;
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
      return null;
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
      return null;
    }
  }
}