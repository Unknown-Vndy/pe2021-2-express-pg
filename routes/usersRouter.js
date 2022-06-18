const { Router } = require('express');

const usersRouter = Router();

usersRouter.post('/');

usersRouter
  .route('/:userId')
  .patch((req, res) => {})
  .delete((req, res) => {});

usersRouter.get('/:userId/phones');

module.exports = usersRouter;
