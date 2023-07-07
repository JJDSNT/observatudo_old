import { Service } from 'typedi';
import { Estado } from '../models/Estado';
import { Cidade } from '../models/Cidade';
import { LocalidadeService } from '../services/LocalidadeService';
import { EstadoRepository } from '../repositories/EstadoRepository';
import { CidadeRepository } from '../repositories/CidadeRepository';


@Service()
export class LocalidadeController {
  private localidadeService: LocalidadeService;

  constructor() {
    this.localidadeService = new LocalidadeService();
  }

  public async getEstadoById(estadoId: number): Promise<Estado | null> {
    return this.localidadeService.getEstadoById(estadoId);
  }

  public async getEstados(): Promise<Estado[] | null> {
    return this.localidadeService.getEstados();
  }

  public async getCidades(): Promise<Cidade[] | null> {
    return this.localidadeService.getCidades();
  }

  public async getCidadesByEstado(estadoId?: number | undefined): Promise<Cidade[] | Cidade | null> {
    return this.localidadeService.getCidadesByEstado(estadoId);
  }

  public async getEstadosECidades(): Promise<{ estado: Estado, cidades: Cidade[] }[] | null> {
    return this.localidadeService.getEstadosECidades();
  }


  public async getIndicadoresPorLocalidade(): Promise<Estado[] | null> {
    return this.localidadeService.getIndicadoresPorLocalidade();
  }

}




/*
async getEstadosECidades(): Promise<{ estado: Estado, cidades: Cidade[] }[] | null> {
  try {

    const estados: Estado[] | null = await this.getEstados();

    const estadosECidades: { estado: Estado, cidades: Cidade[] }[] = [];

    if (estados) {
      for (const estado of estados) {
        const cidades: Cidade[] | null = await this.getCidadesByEstado(estado.codigo);
        if(cidades){
          estadosECidades.push({ estado, cidades });
        }
      }
    }


    return estadosECidades;
  } catch (error) {
    // Trate os erros de forma apropriada de acordo com a lógica do seu aplicativo
    console.error("Erro ao obter os estados e cidades:", error);
    return [];
  }
}





export { LocalidadeController };
*/



