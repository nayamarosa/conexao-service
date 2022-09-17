// criar as rotas
import { Router } from 'express';
import { createMentorController } from './Mentor/useCases/createMentor';
import { createMentoredController } from './Mentored/useCases/createMentored';
import { getAllMentorController } from './Mentor/useCases/getAllMentor';

const router = Router();

router.post('/mentor', (request, response) => {
  return createMentorController.handle(request, response);
});

router.post('/mentored', (request, response) => {
  return createMentoredController.handle(request, response);
});

router.get('/mentor', (request, response) => {
  return getAllMentorController.handle(request, response);
});

export { router }