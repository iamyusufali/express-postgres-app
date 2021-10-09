const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw new Error('Unable to parse environment variables.');
}

module.exports = {
  pgPort: process.env.PG_PORT,
  pgHost: process.env.PG_HOST,
  pgDatabase: process.env.PG_DATABASE,
  pgUser: process.env.PG_USER,
  pgPassword: process.env.PG_PASSWORD,
  serverPort: process.env.SERVER_PORT,
  nodeEnv: process.env.NODE_ENV,
  databaseUrl: process.env.DATABASE_URL,
};
