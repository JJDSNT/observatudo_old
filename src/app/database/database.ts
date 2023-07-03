import sqlite3 from 'sqlite3';
//import { open } from 'sqlite';
import path from 'path';

// Função para abrir a conexão com o banco de dados SQLite
export function openDatabase(): sqlite3.Database {
  const dbPath = path.join(process.cwd(), 'src/app/database/indicadores.sqlite');
  console.log(dbPath);
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the indicadores SQlite database.');
    }
  });
  return db;
}
