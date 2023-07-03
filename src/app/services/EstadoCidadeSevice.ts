// EstadoCidadeService.ts
import { Connection, getManager } from 'typeorm';
import { Estado } from './Estado';
import { Cidade } from './Cidade';

export class EstadoCidadeService {
  private connection: Connection;

  constructor() {
    this.connection = getManager().connection;
  }

  async getEstados(): Promise<Estado[]> {
    return this.connection.getRepository(Estado).find();
  }

  async getCidadesPorEstado(estadoId: number): Promise<Cidade[]> {
    return this.connection.getRepository(Cidade).find({ where: { estado: { id: estadoId } } });
  }
}
