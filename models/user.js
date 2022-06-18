class User {
  static async create (newUser) {
    const { firstName, lastName, email, tel } = newUser;

    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
      RETURNING *;
    `;

    try {
      const {
        rows: [user],
      } = await User.pool.query(insertQuery);

      return user;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static update () {}
  static delete () {}
  static getUsersPhones () {}
}

module.exports = User;
