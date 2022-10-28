import { MentoredSequelizeRepository } from './../../repositories/implementations/MentoredSequelizeRepository';
import { GetMentoredByEmailController } from './GetMentoredByEmailController';
import { GetMentoredByEmailUseCase } from './GetMentoredByEmailUseCase';

const mentoredSequelizeRepository = new MentoredSequelizeRepository();
const getMentoredByEmailUseCase = new GetMentoredByEmailUseCase(mentoredSequelizeRepository);
const getMentoredByEmailController = new GetMentoredByEmailController(getMentoredByEmailUseCase);

export { getMentoredByEmailController };