import { IMentored } from '../../entities/Mentored';
import { IMentoredRepository } from '../IMentoredRepository';
import { Mentored } from '../model/Mentored';

export class MentoredSequelizeRepository implements IMentoredRepository {
  create(newMentored: IMentored) {
    try {
      return Mentored.create(newMentored).then((result: any) => {
        console.log(result);
        return newMentored;
      })
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getByUuid(uuid: string) {
    try {
      return Mentored.findOne({where: {uuid: uuid}}).then((result: any) => {
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
      return Mentored.findAll().then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  update(newMentored: IMentored, uuid: string) {
    try {
      return Mentored.update(newMentored, {where: {uuid: newMentored.uuid}}).then((result: any) => {
        console.log(result);
        return newMentored;
      })
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}