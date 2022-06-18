class User {
  static async create (newUser) {
    const { firstName, lastName, email, tel } = newUser;

    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
      RETURNING *;
    `;

    console.log('insertQuery', insertQuery);

    try {
      const {
        rows: [user],
      } = await User.pool.query(insertQuery);

      return user;
    } catch (err) {
      console.log('err', err);
    }
  }
  static update () {}
  static delete () {}
  static getUsersPhones () {}
}

module.exports = User;
