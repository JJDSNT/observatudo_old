import { Sequelize } from '@sequelize/core';
import SQLite from 'sqlite3';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

export default db
