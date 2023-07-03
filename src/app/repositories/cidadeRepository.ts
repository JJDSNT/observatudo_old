import { Cidade } from '../models/Cidade';
import { openDatabase } from '../database/database';

export class CidadeRepository {
  public async create(cidade: Cidade): Promise<void> {
    const db = openDatabase();
    const query = 'INSERT INTO Cidade (estadoId, id, codigo, nome) VALUES (?, ?, ?, ?)';
    const values = [cidade.estadoId, cidade.id, cidade.codigo, cidade.nome];
    await db.run(query, values);
  }

  public async findById(cidadeId: number): Promise<Cidade | null> {
    const db = openDatabase();
    const query = 'SELECT * FROM Cidade WHERE id = ?';
    const values = [cidadeId];
    return new Promise((resolve, reject) => {
      db.get(query, values, (err, row) => {
        if (err) {
          reject(err);
        } else {
          if (row) {
            const cidade = new Cidade(row.estadoId, row.id, row.codigo, row.nome);
            resolve(cidade);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  public async findByEstadoId(estadoId: number): Promise<Cidade[] | null> {
    const db = openDatabase();
    const query = 'SELECT * FROM Cidade WHERE estadoId = ?';
    const values = [estadoId];
    return new Promise((resolve, reject) => {
      db.all(query, values, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows && rows.length > 0) {
            const cidades = rows.map(row => new Cidade(row.estadoId, row.id, row.codigo, row.nome));
            resolve(cidades);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  public async findByIBGE(ibge: string): Promise<Cidade | null> {
    const db = openDatabase();
    const query = 'SELECT * FROM Cidade WHERE ibge = ?';
    const values = [ibge];
    return new Promise((resolve, reject) => {
      db.get(query, values, (err, row) => {
        if (err) {
          reject(err);
        } else {
          if (row) {
            const cidade = new Cidade(row.estadoId, row.id, row.codigo, row.nome);
            resolve(cidade);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  // Outros métodos de consulta e manipulação de dados podem ser adicionados aqui
}
