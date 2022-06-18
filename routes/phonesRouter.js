const { Router } = require('express');

const phonesRouter = Router();

// '/api/phones'
phonesRouter.get('/', (req, res) => {
  res.send('Successfully handled');
});

module.exports = phonesRouter;
