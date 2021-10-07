const express = require('express');
const app = express();
const PORT = 3000;

const dbQueries = require('./database/queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', dbQueries.getUsers);
app.get('/users/:id', dbQueries.getUserById);
app.post('/user', dbQueries.createNewUser);

app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`));
