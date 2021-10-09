const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw new Error('Unable to parse environment variables.');
}

module.exports = {
  pgPort: process.env.DB_PORT,
  pgHost: process.env.DB_HOST,
  pgDatabase: process.env.DB_DATABASE,
  pgUser: process.env.DB_USER,
  pgPassword: process.env.DB_PASSWORD,
  nodeEnv: process.env.NODE_ENV,
  databaseUrl: process.env.DATABASE_URL,
};
