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

module.exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.delete(userId);
    if (deletedUser) {
      return res.status(204).end();
    }
    res.status(404).send('User Not Found');
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};
module.exports.getUsersPhones = async (req, res) => {};
