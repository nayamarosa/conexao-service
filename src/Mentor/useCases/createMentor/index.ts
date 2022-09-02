import { MentorSequelizeRepository } from './../../repositories/implementations/MentorSequelizeRepository';
import { CreateMentorUseCase } from './CreateMentorUseCase';
import { CreateMentorController } from './CreateMentorController';

const mentorSequelizeRepository = new MentorSequelizeRepository();
const createMentorUseCase = new CreateMentorUseCase(mentorSequelizeRepository);
const createMentorController = new CreateMentorController(createMentorUseCase);

export { createMentorController };