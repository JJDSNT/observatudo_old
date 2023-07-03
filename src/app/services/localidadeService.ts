import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';
import { EstadoRepository } from '../repositories/estadoRepository';
import { CidadeRepository } from '../repositories/cidadeRepository';

export class LocalidadeService {
  private estadoRepository: EstadoRepository;
  private cidadeRepository: CidadeRepository;

  constructor(estadoRepository: EstadoRepository, cidadeRepository: CidadeRepository) {
    this.estadoRepository = estadoRepository;
    this.cidadeRepository = cidadeRepository;
  }

  public async adicionarEstado(estado: Estado): Promise<void> {
    await this.estadoRepository.create(estado);
  }

  public async getEstadoById(estadoId: number): Promise<Estado | null> {
    return this.estadoRepository.findById(estadoId);
  }

  public async getCidadeById(cidadeId: number): Promise<Cidade | null> {
    return this.cidadeRepository.findById(cidadeId);
  }

  public async getCidadesByEstado(estadoId: number): Promise<Cidade[] | null> {
    return this.cidadeRepository.findByEstadoId(estadoId);
  }

  public async buscarLocalidadePorIBGE(ibge: string): Promise<Estado | Cidade | null> {
    let localidade: Estado | Cidade | null = await this.estadoRepository.findByIBGE(ibge);
    if (!localidade) {
      localidade = await this.cidadeRepository.findByIBGE(ibge);
    }
    return localidade;
  }

  // Outros métodos de serviço relacionados a localidades podem ser adicionados aqui
}
