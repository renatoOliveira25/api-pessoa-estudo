require('dotenv').config();
import { IDatabase, IMain } from 'pg-promise';
const pgp: IMain = require('pg-promise')();

const connection = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db: IDatabase<{}> = pgp(connection);

export { db, pgp };
