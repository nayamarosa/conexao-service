import { MentoredSequelizeRepository } from '../../repositories/implementations/MentoredSequelizeRepository'
import { UpdateMentoredUseCase } from './UpdateMentoredUseCase';
import { UpdateMentoredController } from './UpdateMentoredController';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const updateMentoredUseCase = new UpdateMentoredUseCase(mentoredSequelizeRepository);
const updateMentoredController = new UpdateMentoredController(updateMentoredUseCase);

export { updateMentoredController };