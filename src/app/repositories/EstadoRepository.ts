import DB from "../database/config/ormconfig";
//consertar para correta inicialização do banco
import { Estado } from '../models/Estado';

export const EstadoRepository = DB.getRepository(Estado);
