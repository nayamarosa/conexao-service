import { MentorSequelizeRepository } from './../../repositories/implementations/MentorSequelizeRepository';
import { GetAllMentorController } from './GetAllMentorController';
import { GetAllMentorUseCase } from './GetAllMentorUseCase';

const mentorSequelizeRepository = new MentorSequelizeRepository();
const getAllMentorUseCase = new GetAllMentorUseCase(mentorSequelizeRepository);
const getAllMentorController = new GetAllMentorController(getAllMentorUseCase);

export { getAllMentorController };