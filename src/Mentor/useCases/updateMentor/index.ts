import { MentorSequelizeRepository } from '../../repositories/implementations/MentorSequelizeRepository';
import { UpdateMentorUseCase } from './UpdateMentorUseCase';
import { UpdateMentorController } from './UpdateMentorController';

const mentorSequelizeRepository = new MentorSequelizeRepository();
const updateMentorUseCase = new UpdateMentorUseCase(mentorSequelizeRepository);
const updateMentorController = new UpdateMentorController(updateMentorUseCase);

export { updateMentorController };