require('dotenv').config();

const Pool = require('pg').Pool;

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const poolConfig = {
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ...(isProduction && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};

const pool = new Pool(poolConfig);

module.exports = pool;
