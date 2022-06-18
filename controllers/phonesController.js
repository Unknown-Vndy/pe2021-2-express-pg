const { Phone } = require('../models');

module.exports.getPhones = async (req, res) => {
  const { pagination } = req;
  try {
    const foundPhones = await Phone.getPhones({ pagination });
    res.status(200).send(foundPhones);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};
