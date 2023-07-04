import DB from '../database/config/ormconfig';

import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';



export async function rodarTeste() {

    const estado = new Estado(10, "São Paulo", "SP");
    await DB.manager.save(estado)

    const cidade = new Cidade(estado, 1010, "campos do jordão")
    const cidade2 = new Cidade(estado, 1011, "campinas")

    await DB.manager.save(cidade)
    await DB.manager.save(cidade2)

    const cidades = await DB.manager.find(Cidade)

    return cidades;
}