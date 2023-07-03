import { Estado } from '../models/Estado';
import { EstadoRepository } from '../repositories/estadoRepository';

export class EstadoService {
  private estadoRepository: EstadoRepository;

  constructor() {
    this.estadoRepository = new EstadoRepository();
  }

  public adicionarEstado(estado: Estado): void {
    //this.estadoRepository.adicionarEstado(estado);
  }

  public async getEstados(): Promise<Estado[]> {
    return this.estadoRepository.getEstados();
  }

  public async buscarEstadoPorUF(uf: string): Promise<Estado | undefined> {
    const estados = await this.estadoRepository.getEstados();
    return estados.find((estado) => estado.uf === uf);
  }

  async getCidadesPorEstado(estadoId: number): Promise<Cidade[]> {
    return this.connection.getRepository(Cidade).find({ where: { estado: { id: estadoId } } });
  }

  public async getCidadesByEstado(estadoId: number): Promise<Cidade[] | null> {
    const estado = await this.estadoRepository.getEstadoById(estadoId);
    if (estado) {
      return estado.getCidades();
    }
    return null;
  }

}
