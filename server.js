const express = require('express');
const app = express();

const dbQueries = require('./database/queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', dbQueries.getUsers);
app.get('/users/:id', dbQueries.getUserById);
app.post('/user', dbQueries.createNewUser);
app.put('/user/:id', dbQueries.updateUser);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running at Port: ${process.env.PORT || 3000}`)
);
