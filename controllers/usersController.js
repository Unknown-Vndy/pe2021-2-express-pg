const { User } = require('./../models');

module.exports.createUser = async (req, res) => {
  const { body } = req;

  try {
    const newUser = await User.create(body);
    res.status(201).send({ newUser });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};
module.exports.updateUser = async (req, res) => {};
module.exports.deleteUser = async (req, res) => {};
module.exports.getUsersPhones = async (req, res) => {};
