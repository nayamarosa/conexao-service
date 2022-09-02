// criar as rotas
import { Router } from 'express';
import { createMentorController } from './Mentor/useCases/createMentor';

const router = Router();

router.post('/create-mentor', (request, response) => {
  return createMentorController.handle(request, response);
});

export { router }