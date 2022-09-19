// criar as rotas
import { Router } from 'express';
import { createMentorController } from './Mentor/useCases/createMentor';
import { createMentoredController } from './Mentored/useCases/createMentored';

const router = Router();

router.post('/create-mentor', (request, response) => {
  return createMentorController.handle(request, response);
});

router.post('/create-mentored', (request, response) => {
  console.log('mentored');
  return createMentoredController.handle(request, response);

});

export { router }