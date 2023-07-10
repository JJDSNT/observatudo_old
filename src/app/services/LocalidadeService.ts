import { Service } from 'typedi';
import { In, Repository } from 'typeorm';
import DB from '../database/config/ormconfig';

import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';
import { EstadoRepository } from '../repositories/EstadoRepository';
import { CidadeRepository } from '../repositories/CidadeRepository';



@Service()
export class LocalidadeService {

  private estadoRepository: Repository<Estado> = EstadoRepository;
  private cidadeRepository: Repository<Cidade> = CidadeRepository;

  constructor() {}

  async getCidades(): Promise<Cidade[]> {
    return this.cidadeRepository.find();
  }

  public async getCidadeById(cidadeId: number): Promise<Cidade | null> {
    const cidade = await this.cidadeRepository.findOneBy({ codigo: In([cidadeId]) });
    return cidade;
  }

  async getEstados(): Promise<Estado[]> {
    return this.estadoRepository.find();
  }

  public async getEstadoById(estadoId: number | undefined): Promise<Estado | null> {
    const estado = await this.estadoRepository.findOneBy({ codigo: In([estadoId]) });
    return estado;
  }


  public async getEstadosECidades(): Promise<{ estado: Estado, cidades: Cidade[] }[] | null> {
    try {
      const estados: Estado[] | null = await this.getEstados();

      if (estados) {
        const estadosECidades: { estado: Estado, cidades: Cidade[] }[] = [];

        for (const estado of estados) {
          const cidades: Cidade[] | Cidade | null = await this.getCidadesByEstado(estado.codigo);
          if (cidades) {
            estadosECidades.push({ estado, cidades });
          }
        }

        return estadosECidades;
      }

      return null;
    } catch (error) {
      console.error('Erro ao buscar os estados e cidades:', error);
      return error;
    }
  }



  public async getCidadesByEstado(estadoId: number | undefined): Promise<Cidade[] | Cidade | null> {
    const estado = await this.getEstadoById(estadoId);
    if (estado) {
      const estadoWithCidades = await DB
        .createQueryBuilder()
        .relation(Estado, "cidades")
        .of(estado)
        .loadMany();
    
      console.log(estadoWithCidades);
      return estadoWithCidades;
    }
    
    return null;
   
     const cidades = await this.estadoRepository.findOne(estadoId, { relations: ['cidades'] });
    if (!cidades) {
      return null; // Retorna nulo se o estado não for encontrado
    }
    return cidades.cidades;
  }

  
/*

  public async function getCidadesByEstado({ estadoId }: { estadoId: number; }): Promise<Cidade[] | null> {
    //const estadoRepository = new EstadoRepository(); // Instancie o repositório adequado
//    const connection = await getConnection(); // Obtenha a conexão do TypeORM
//  const estadoRepository = connection.getRepository(Estado); // Obtenha o repositório do Estado

    // Verifique se o estado existe
    const estado: Estado | null = await this.estadoRepository.find(estadoId);
    if (!estado) {
      return null; // Retorna nulo se o estado não for encontrado
    }
  
    // Retorna as cidades do estado
    return estado.cidades;
  }

*/


/*
  async getEstadosECidades(): Promise<{ estado: Estado, cidades: Cidade[] }[]> {
    try {
      const estados: Estado[] = await this.getEstados();
  
      const estadosECidades: { estado: Estado, cidades: Cidade[] }[] = [];
  
      for (const estado of estados) {
        const cidades: Cidade[] = await this.getCidadesPorEstado(estado.id);
        estadosECidades.push({ estado, cidades });
      }
  
      return estadosECidades;
    } catch (error) {
      // Trate os erros de forma apropriada de acordo com a lógica do seu aplicativo
      console.error("Erro ao obter os estados e cidades:", error);
      return [];
    }
  }

*/

  public async adicionarEstado(estado: Estado): Promise<void> {
    await this.estadoRepository.create(estado);
  }



  public async getLocalidades(estadoId: number): Promise<Cidade[] | null> {
    return this.cidadeRepository.findByEstadoId(estadoId);
  }


  async criarEstado(codigo: number, nome: string, sigla: string): Promise<Estado> {
    const estado = new Estado(codigo, nome, sigla);
    return this.estadoRepository.save(estado);
  }

  async criarCidade(estado: Estado, codigo: number, nome: string): Promise<Cidade> {
    const cidade = new Cidade(estado, codigo, nome);
    return this.cidadeRepository.save(cidade);
  }

  async adicionarCidadeAoEstado(estado: Estado, cidade: Cidade): Promise<void> {
    estado.adicionarCidade(cidade);
    await this.estadoRepository.save(estado);
  }

  public async adicionarEstado(estado: Estado): Promise<void> {
    await this.estadoRepository.create(estado);
  }
  
  async obterEstadoPorCodigo(codigo: number): Promise<Estado | undefined> {
    return this.estadoRepository.findOne({ codigo });
  }

  async obterCidadePorCodigo(codigo: number): Promise<Cidade | undefined> {
    return this.cidadeRepository.findOne({ codigo });
  }

  public async buscarLocalidadePorIBGE(ibge: number): Promise<Estado | Cidade | null> {
    let localidade: Estado | Cidade | null = await this.estadoRepository.findByIBGE(ibge);
    if (!localidade) {
      localidade = await this.cidadeRepository.findByCodigo(ibge);
    }
    return localidade;
  }


}
