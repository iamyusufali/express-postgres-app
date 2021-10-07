const Pool = require('pg').Pool;

const { port, user, host, database, password } = require('../config');

const pool = new Pool({ user, host, database, password, port });

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

const createNewUser = (request, response) => {
  const name = request.body.name;
  const email = request.body.email;

  if (!name || !email) {
    return response.status(406).send('name and email fields are mandatory');
  }

  const dbQuery = 'INSERT INTO users (name, email) VALUES ($1, $2)';

  pool.query(dbQuery, [name, email], (error, result) => {
    if (error) throw error;

    response.status(201).json(result);
  });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.body.name;
  const email = request.body.email;

  const dbQuery = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

  pool.query(dbQuery, [name, email, id], (error, result) => {
    if (error) throw error;

    response.status(200).send(`User modified with ID: ${id}`);
  });
};

module.exports = { getUsers, getUserById, createNewUser, updateUser };
