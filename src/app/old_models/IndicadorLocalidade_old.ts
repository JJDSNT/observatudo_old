import { Indicador } from '../models/Indicador';
import { Localidade } from '../models/Localidade';

export class IndicadorLocalidade {
  private indicador: Indicador;
  private localidade: Localidade;
  private valores: Map<Date, number>;

  constructor(indicador: Indicador, localidade: Localidade) {
    this.indicador = indicador;
    this.localidade = localidade;
    this.valores = new Map<Date, number>();
  }

  public getIndicador(): Indicador {
    return this.indicador;
  }

  public getLocalidade(): Localidade {
    return this.localidade;
  }

  public getValor(mes: Date): number | undefined {
    return this.valores.get(mes);
  }

  public setValor(mes: Date, valor: number): void {
    this.valores.set(mes, valor);
  }

  public getValores(): Map<Date, number> {
    return this.valores;
  }

}
