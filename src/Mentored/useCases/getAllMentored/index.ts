import { MentoredSequelizeRepository } from './../../repositories/implementations/MentoredSequelizeRepository';
import { GetAllMentoredController } from './GetAllMentoredController';
import { GetAllMentoredUseCase } from './GetAllMentoredUseCase';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const getAllMentoredUseCase = new GetAllMentoredUseCase(mentoredSequelizeRepository);
const getAllMentoredController = new GetAllMentoredController(getAllMentoredUseCase);

export { getAllMentoredController };