const { Phone } = require('../models');

module.exports.getPhones = async (req, res) => {
  try {
    const foundPhones = await Phone.getPhones();
    res.status(200).send(foundPhones);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};
