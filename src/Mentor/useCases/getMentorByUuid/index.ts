import { MentorSequelizeRepository } from './../../repositories/implementations/MentorSequelizeRepository';
import { GetMentorByUuidController } from './GetMentorByUuidController';
import { GetMentorByUuidUseCase } from './GetMentorByUuidUseCase';

const mentorSequelizeRepository = new MentorSequelizeRepository();
const getMentorByUuidUseCase = new GetMentorByUuidUseCase(mentorSequelizeRepository);
const getMentorByUuidController = new GetMentorByUuidController(getMentorByUuidUseCase);

export { getMentorByUuidController };