//import { openDatabase } from '../database/database';
import { Repository } from 'typeorm';
import { Cidade } from '../models/Cidade';

export class CidadeRepository extends Repository<Cidade> {
  // Adicione aqui os métodos personalizados para trabalhar com o banco de dados para a entidade Estado
}
