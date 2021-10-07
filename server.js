const express = require('express');
const app = express();
const PORT = 3000;

const dbQueries = require('./queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', dbQueries.getUsers);

app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`));
