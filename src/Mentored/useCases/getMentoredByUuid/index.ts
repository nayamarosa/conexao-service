import { MentoredSequelizeRepository } from './../../repositories/implementations/MentoredSequelizeRepository';
import { GetMentoredByUuidController } from './GetMentoredByUuidController';
import { GetMentoredByUuidUseCase } from './GetMentoredByUuidUseCase';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const getMentoredByUuidUseCase = new GetMentoredByUuidUseCase(mentoredSequelizeRepository);
const getMentoredByUuidController = new GetMentoredByUuidController(getMentoredByUuidUseCase);

export { getMentoredByUuidController };