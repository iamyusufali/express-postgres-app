const express = require('express');
const app = express();

const pgPool = require('./database/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/players', (_, response) => {
  pgPool.query('SELECT * FROM players ORDER BY id ASC', (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
});

app.get('/players/:id', (request, response) => {
  const id = parseInt(request.params.id);

  pgPool.query('SELECT * FROM players WHERE id = $1', [id], (error, result) => {
    if (error) throw error;

    response.status(200).json(result.rows);
  });
});

app.post('/player', (request, response) => {
  const name = request.body.name;
  const club = request.body.club;

  if (!name || !club) {
    return response.status(406).send('name and club fields are mandatory');
  }

  const dbQuery = 'INSERT INTO players (name, club) VALUES ($1, $2)';

  pgPool.query(dbQuery, [name, club], (error) => {
    if (error) throw error;

    response
      .status(201)
      .json(`${name} has been added to records successfully.`);
  });
});

app.put('/player/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.body.name;
  const club = request.body.club;

  const dbQuery = 'UPDATE players SET name = $1, club = $2 WHERE id = $3';

  pgPool.query(dbQuery, [name, club, id], (error) => {
    if (error) throw error;

    response.status(200).send('Player details updated successfully.');
  });
});

app.delete('/player/:id', (request, response) => {
  const id = parseInt(request.params.id);

  pgPool.query('DELETE FROM players WHERE id = $1', [id], (error, results) => {
    if (error) throw error;

    response.status(200).send(`Player with ID: ${id} deleted successfully.`);
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running at Port: ${process.env.PORT || 3000}`)
);
