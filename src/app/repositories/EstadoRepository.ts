import DB from "../database/config/ormconfig";
import { Repository } from 'typeorm';
import { Estado } from '../models/Estado';

export class EstadoRepository extends Repository<Estado> {
  // Adicione aqui os métodos personalizados para trabalhar com o banco de dados para a entidade Estado
  public async getEstados (): Promise<Estado|Estado[]|null> {
    let estados = await DB.getRepository(Estado).find();
    return estados;
}
}
