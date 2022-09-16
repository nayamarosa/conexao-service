import { MentoredSequelizeRepository } from './../../repositories/implementations/MentoredSequelizeRepository';
import { CreateMentoredUseCase } from './CreateMentoredUseCase';
import { CreateMentoredController } from './CreateMentoredController';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const createMentoredUseCase = new CreateMentoredUseCase(mentoredSequelizeRepository);
const createMentoredController = new CreateMentoredController(createMentoredUseCase);

export { createMentoredController };