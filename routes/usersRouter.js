const { Router } = require('express');

const usersRouter = Router();

usersRouter.post('/');
usersRouter.patch('/:userId');
usersRouter.delete('/:userId');
usersRouter.get('/:userId/phones', (req, res) => {
  res.send('Successfully handled');
});

module.exports = usersRouter;
