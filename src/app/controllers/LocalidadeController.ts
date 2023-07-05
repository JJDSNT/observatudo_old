import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';
import { LocalidadeService } from '../services/localidadeService';
import { EstadoRepository } from '../repositories/EstadoRepository';
import { CidadeRepository } from '../repositories/CidadeRepository';

class LocalidadeController {
  private localidadeService: LocalidadeService;

  constructor(
    estadoRepository: EstadoRepository,
    cidadeRepository: CidadeRepository
  ) {
    this.localidadeService = new LocalidadeService(estadoRepository, cidadeRepository);
  }

  public async getEstadoById(estadoId: number): Promise<Estado | null> {
    return this.localidadeService.getEstadoById(estadoId);
  }

  public async getCidadesByEstado(estadoId: number): Promise<Cidade[] | null> {
    return this.localidadeService.getCidadesByEstado(estadoId);
  }

  public async getEstados(): Promise<Estado[] | null> {
    return this.localidadeService.getEstados();
  }
}

export { LocalidadeController };
