// criar as rotas
import { response, Router } from 'express';

const router = Router();

router.post("/create-mentor", (request, reponse) => {
  return response.status(200).send("ok");
});

export { router }