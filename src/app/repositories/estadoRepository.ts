import { openDatabase } from '../database/database';
import { Estado } from '../models/Estado';

export class EstadoRepository {
  public getEstados(): Promise<Estado[]> {
    return new Promise((resolve, reject) => {
      const db = openDatabase();
      db.all('SELECT * FROM Estado', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Outros métodos de repositório relacionados ao Estado podem ser adicionados aqui
}
