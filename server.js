const express = require('express');
const app = express();

const pgPool = require('./database/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (_, response) => {
  pgPool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
});

app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);

  pgPool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    if (error) throw error;

    response.status(200).json(result.rows);
  });
});

app.post('/user', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;

  if (!name || !email) {
    return response.status(406).send('name and email fields are mandatory');
  }

  const dbQuery = 'INSERT INTO users (name, email) VALUES ($1, $2)';

  pgPool.query(dbQuery, [name, email], (error, result) => {
    if (error) throw error;

    response.status(201).json(`New User has been created successfully.`);
  });
});

app.put('/user/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.body.name;
  const email = request.body.email;

  const dbQuery = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

  pgPool.query(dbQuery, [name, email, id], (error, result) => {
    if (error) throw error;

    response.status(200).send(`User modified with ID: ${id}`);
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running at Port: ${process.env.PORT || 3000}`)
);
