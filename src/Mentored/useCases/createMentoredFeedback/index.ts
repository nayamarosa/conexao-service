import { MentoredSequelizeRepository } from './../../repositories/implementations/MentoredSequelizeRepository';
import { CreateMentoredFeedbackUseCase } from './CreateMentoredFeedbackUseCase';
import { CreateMentoredFeedbackController } from './CreateMentoredFeedbackController';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const createMentoredFeedbackUseCase = new CreateMentoredFeedbackUseCase(mentoredSequelizeRepository);
const createMentoredFeedbackController = new CreateMentoredFeedbackController(createMentoredFeedbackUseCase);

export { createMentoredFeedbackController };