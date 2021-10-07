const express = require('express');
const app = express();

const { serverPort } = require('./config');

const dbQueries = require('./database/queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', dbQueries.getUsers);
app.get('/users/:id', dbQueries.getUserById);
app.post('/user', dbQueries.createNewUser);
app.put('/user/:id', dbQueries.updateUser);

app.listen(serverPort, () =>
  console.log(`Server running at Port: ${serverPort}`)
);
