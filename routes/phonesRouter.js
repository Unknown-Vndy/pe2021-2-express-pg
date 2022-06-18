const { Router } = require('express');
const { phoneController } = require('../controllers');

const phonesRouter = Router();

// '/api/phones'
phonesRouter.get('/', phoneController.getPhones);

module.exports = phonesRouter;
