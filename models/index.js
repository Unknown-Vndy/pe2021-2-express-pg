const { Pool } = require('pg');
const User = require('./user');

const dbConfig = {
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'phones_sales',
};

const pool = new Pool(dbConfig);

pool.connect(err => {
  if (!err) {
    console.log('Connection to DB successfully done)))');
  }
});

process.on('beforeExit', () => {
  pool.end();
});

User.pool = pool;

// User.create({
//   firstName: 'fn',
//   lastName: 'ln',
//   email: 'test@test',
//   tel: '+380123856789',
// })
//   .then(data => console.log('data', data))
//   .catch(err => console.log('err', err));

module.exports = { User };
