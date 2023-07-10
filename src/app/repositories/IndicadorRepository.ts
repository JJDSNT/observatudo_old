import DB from "../database/config/ormconfig";
//consertar para correta inicialização do banco
import { Indicador } from '../models/Indicador';

export const indicadorRepository = DB.getRepository(Indicador);
