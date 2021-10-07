const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw new Error('Unable to parse environment variables.');
}

module.exports = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  serverPort: process.env.SERVER_PORT,
};
