import { IMentored} from '../../entities/Mentored';
import { IMentoredRepository } from '../IMentoredRepository';
import { Mentored } from '../model/Mentored';
import { Mentor } from '../../../Mentor/repositories/model/Mentor';

export class MentoredSequelizeRepository implements IMentoredRepository {
  
  async update (newMentored: IMentored): (typeof Mentored ) {
    try {
      console.log('newMentored',newMentored)
      const newMentor = await Mentor.findAll({where: {profession: newMentored.interestArea}}).then((result: any)=>{
        console.log('result',result)
        if(!result){
          return null
        }
        return result[Math.round(randomNumber(0,result.length - 1))]
      })
      console.log('newMentor', newMentor)
      if (newMentor){
        newMentored.mentorUuid = newMentor.uuid
      }
      const creadtedMentored = await Mentored.update(newMentored, {where: {uuid: newMentored.uuid}})
      
      return await Mentored.findOne({where: {uuid: creadtedMentored.uuid}, include: [Mentor]})
    
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getByUuid (uuid: string): (typeof Mentored ){
    try {
      const mentored = await Mentored.findOne({where: {uuid: uuid},include: [Mentor]})
      console.log(mentored);
      if (mentored.mentorUuid === null){
        const newMentor = await Mentor.findAll({where: {profession: mentored.interestArea}}).then((result: any)=>{
          if(!result){
            return null
          }
          return result[Math.round(randomNumber(0,result.length - 1))]
        })
        
        if(newMentor){
          mentored.setDataValue("mentor", newMentor)
          mentored.save()
        }

      }
      return mentored;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getByEmail (email: string): (typeof Mentored ){
    try {
      const mentored = await Mentored.findOne({where: {email: email},include: [Mentor]})
      
      if (mentored.mentorUuid === null){
        const newMentor = await Mentor.findAll({where: {profession: mentored.interestArea}}).then((result: any)=>{
          if(!result){
            return null
          }
          return result[Math.round(randomNumber(0,result.length - 1))]
        })
        
        if(newMentor){
          mentored.setDataValue("mentor", newMentor)
          mentored.save()
        }

      }
      return mentored;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  getAll() {
    try {
      return Mentored.findAll({include: [Mentor]}).then((result: any) => {
        console.log(result);
        return result;
      })
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  createFeedback(uuid: string, feedBack: string){
    try {
      return Mentored.findByPk(uuid).then(((mentored : any) => {
        
        if (mentored.feedBacks !== feedBack){
          mentored.setDataValue("feedBacks", feedBack)
        }else {
          console.log("Feedback was the same")
          return null
        }
        
        mentored.save()

        return mentored

      }))


    } catch (error) {
      console.log(error)
      return error
    }
  }

  create(newMentored: IMentored) {
    try {
      return Mentored.create(newMentored).then((result: any) => {
        console.log(result);
        return newMentored;
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min
}