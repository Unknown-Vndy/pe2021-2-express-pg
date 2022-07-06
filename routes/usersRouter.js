const { Router } = require('express');
const { userController } = require('../controllers');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);

usersRouter
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

usersRouter.get('/:userId/phones');

module.exports = usersRouter;
