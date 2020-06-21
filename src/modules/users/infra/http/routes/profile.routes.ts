import { Router } from 'express';

import ProfilerController from '@modules/users/infra/http/controllers/ProfileController';

import ensureAuthenticate from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfilerController();

profileRouter.use(ensureAuthenticate);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
