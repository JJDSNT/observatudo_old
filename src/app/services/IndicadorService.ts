import { Service } from 'typedi';
import { In, Repository } from 'typeorm';


import { Indicador } from "../models/Indicador";
import { indicadorRepository } from "../repositories/IndicadorRepository"

class IndicadorService {
  //private indicadorRepository = getRepository(Indicador);

  async buscarTodosIndicadores(): Promise<Indicador[]> {
    return await indicadorRepository.find(
      {
        //relations: ['Eixo'],
        //loadRelationIds: true,
      }
    );
  }


  async buscarIndicadoresPorEixo(eixoId: number): Promise<Indicador[]> {
    return await this.indicadorRepository.createQueryBuilder("indicador")
      .leftJoin("indicador.eixos", "eixo")
      .where("eixo.id = :eixoId", { eixoId })
      .getMany();
  }

// IndicadorService

async buscarIndicadoresComValoresPorEixo(localidadeId: number): Promise<any[]> {
  return await this.indicadorRepository.createQueryBuilder("indicador")
    .leftJoinAndSelect("indicador.eixos", "eixo")
    .leftJoinAndSelect("indicador.valoresIndicador", "valorIndicador", "valorIndicador.localidadeId = :localidadeId", { localidadeId })
    .orderBy("eixo.id")
    .getMany();
}


  async criarIndicador(nome: string, descricao: string, eixos: number[]): Promise<Indicador> {
    const indicador = new Indicador();
    indicador.nome = nome;
    indicador.descricao = descricao;
    indicador.eixos = eixos;

    return await this.indicadorRepository.save(indicador);
  }

  async buscarIndicadorPorId(id: number): Promise<Indicador | undefined> {
    return await this.indicadorRepository.findOne(id);
  }



  async atualizarIndicador(id: number, nome?: string, descricao?: string, eixos?: number[]): Promise<Indicador | undefined> {
    const indicador = await this.indicadorRepository.findOne(id);
    if (!indicador) {
      return undefined;
    }

    if (nome) {
      indicador.nome = nome;
    }

    if (descricao) {
      indicador.descricao = descricao;
    }

    if (eixos) {
      indicador.eixos = eixos;
    }

    return await this.indicadorRepository.save(indicador);
  }

  async excluirIndicador(id: number): Promise<boolean> {
    const indicador = await this.indicadorRepository.findOne(id);
    if (!indicador) {
      return false;
    }

    await this.indicadorRepository.remove(indicador);
    return true;
  }
}

export default IndicadorService;