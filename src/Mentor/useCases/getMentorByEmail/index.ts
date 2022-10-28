import { MentorSequelizeRepository } from './../../repositories/implementations/MentorSequelizeRepository';
import { GetMentorByEmailController } from './GetMentorByEmailController';
import { GetMentorByEmailUseCase } from './GetMentorByEmailUseCase';

const mentorSequelizeRepository = new MentorSequelizeRepository();
const getMentorByEmailUseCase = new GetMentorByEmailUseCase(mentorSequelizeRepository);
const getMentorByEmailController = new GetMentorByEmailController(getMentorByEmailUseCase);

export { getMentorByEmailController };