class Phone {
  static async getPhones () {
    const selectQuery = `
      SELECT *
      FROM PHONES;
    `;

    try {
      const { rows } = await Phone.pool.query(selectQuery);

      return rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Phone;
