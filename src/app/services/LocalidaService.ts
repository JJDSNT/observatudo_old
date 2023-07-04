import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';
import { EstadoRepository } from '../repositories/EstadoRepository';
import { CidadeRepository } from '../repositories/CidadeRepository';

export class LocalidadeService {
  constructor(
    private estadoRepository: EstadoRepository,
    private cidadeRepository: CidadeRepository
  ) {}

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

  public async getCidadesByEstado(estadoId: number): Promise<Cidade[] | null> {
    return this.cidadeRepository.findByEstadoId(estadoId);
  }


  public async buscarLocalidadePorIBGE(ibge: number): Promise<Estado | Cidade | null> {
    let localidade: Estado | Cidade | null = await this.estadoRepository.findByIBGE(ibge);
    if (!localidade) {
      localidade = await this.cidadeRepository.findByCodigo(ibge);
    }
    return localidade;
  }

  async listarEstados(): Promise<Estado[]> {
    return this.estadoRepository.find();
  }

  async listarCidades(): Promise<Cidade[]> {
    return this.cidadeRepository.find();
  }
}
