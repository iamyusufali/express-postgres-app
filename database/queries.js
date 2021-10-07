const Pool = require('pg').Pool;

const { port, user, host, database, password } = require('../config');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
