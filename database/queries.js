const Pool = require('pg').Pool;

const { port, user, host, database, password } = require('../config');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

const getUsers = (_, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    if (error) throw error;

    response.status(200).json(result.rows);
  });
};

module.exports = {
  getUsers,
  getUserById,
};
