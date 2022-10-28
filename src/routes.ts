// criar as rotas
import { Router } from 'express';
import { createMentorController } from './Mentor/useCases/createMentor';
import { getAllMentorController } from './Mentor/useCases/getAllMentor';
import { getMentorByUuidController } from './Mentor/useCases/getMentorByUuid';
import { getMentorByEmailController } from './Mentor/useCases/getMentorByEmail';
import { updateMentorController } from './Mentor/useCases/updateMentor';

import { createMentoredController } from './Mentored/useCases/createMentored';
import { getAllMentoredController } from './Mentored/useCases/getAllMentored';
import { getMentoredByUuidController } from './Mentored/useCases/getMentoredByUuid';
import { getMentoredByEmailController } from './Mentored/useCases/getMentoredByEmail';
import { createMentoredFeedbackController } from './Mentored/useCases/createMentoredFeedback';
import { updateMentoredController } from './Mentored/useCases/updateMentored';

const router = Router();

router.post('/mentor', (request, response) => {
  return createMentorController.handle(request, response);
});
router.get('/mentor', (request, response) => {
  return getAllMentorController.handle(request, response);
});
router.get('/mentor/:uuid', (request, response) => {
  return getMentorByUuidController.handle(request, response);
});
router.get('/mentor-email/:email', (request, response) => {
  return getMentorByEmailController.handle(request, response);
});
router.put('/mentor/:uuid', (request, response) => {
  return updateMentorController.handle(request, response);
});


router.post('/mentored', (request, response) => {
  return createMentoredController.handle(request, response);
});
router.get('/mentored', (request, response) => {
  return getAllMentoredController.handle(request, response);
});
router.get('/mentored/:uuid', (request, response) => {
  return getMentoredByUuidController.handle(request, response);
});

router.get('/mentored-email/:email', (request, response) => {
  return getMentoredByEmailController.handle(request, response);
});

router.post('/mentored/:uuid', (request, response) => {
  return createMentoredFeedbackController.handle(request, response);
});

router.put('/mentored/:uuid', (request, response) => {
  return updateMentoredController.handle(request, response);
});


export { router }