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
  static async get (id) {
    const getUserQuery = `
      SELECT * 
      FROM users
      WHERE id=${id}
    `;
    try {
      const {
        rows: [user],
      } = await User.pool.query(getUserQuery);

      return user;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async update (id, { firstName, lastName, email, tel }) {
    const getUser = await this.get(id);
    // есть ли возможность сделать тоже самое но с неограниченым колличеством параметров? без прямого присваивания каждого значения
    if (firstName === undefined) {
      firstName = getUser.first_name;
    }
    if (lastName === undefined) {
      lastName = getUser.last_name;
    }
    if (email === undefined) {
      email = getUser.email;
    }
    if (tel === undefined) {
      tel = getUser.tel;
    }
    console.log(
      'firstName, lastName, email, tel :>> ',
      firstName,
      lastName,
      email,
      tel
    );
    const updateUserQuery = `
      UPDATE users
      SET first_name = '${firstName}',
          last_name = '${lastName}',
          email = '${email}',
          tel = '${tel}'
      WHERE id = ${+id}
      RETURNING *;
    `;
    try {
      const {
        rows: [updatedUser],
      } = await User.pool.query(updateUserQuery);

      return updatedUser;
    } catch (error) {
      throw new Error(error.detail);
    }
  }
  static async delete (id) {
    const deleteQuery = `
      DELETE FROM users
      WHERE id=${id} 
      RETURNING id;
    `;

    try {
      const {
        rows: [deletedUser],
      } = await User.pool.query(deleteQuery);
      return deletedUser;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static getUsersPhones () {}
}

module.exports = User;
