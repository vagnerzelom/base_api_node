import { Router } from 'express';

import UserController from './app/controllers/Usercontroller';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/users', UserController.list);

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
