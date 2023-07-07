import DB from "../database/config/ormconfig";
//consertar para correta inicialização do banco
import { Cidade } from '../models/Cidade';

export const CidadeRepository = DB.getRepository(Cidade);