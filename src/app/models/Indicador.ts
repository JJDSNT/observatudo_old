import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Eixo } from "./Eixo"
import { IndicadorId } from "./IndicadorId";
import { ValorIndicador } from "./ValorIndicador"

@Entity()
export class Indicador {
  constructor(
    indicadorId: IndicadorId,
    eixos: Eixo[],
  ){
    this.indicadorId = indicadorId;
    this.eixos = eixos;
  }

  @Column(() => IndicadorId)
  indicadorId!: IndicadorId;

  @ManyToMany('Eixo')
  @JoinTable()
  eixos!: Eixo[];

  @ManyToMany("Localidade", "indicadores_localidades")
  localidades!: Relation<Localidade>;

  @OneToMany("ValorIndicador", "indicador")
  valoresIndicador!: ValorIndicador[];

/*
  @Column("jsonb")
  valores!: Map<Date, number>;

  getValores2(): Map<Date, number> {
    return this.valores;
  }

  getValor2(date: Date): number | undefined {
    return this.valores.get(date);
  }
*/

  getValores(): ValorIndicador[] {
    return this.valoresIndicador;
  }

  getValor(date: Date): number | undefined {
    const valorIndicador = this.valoresIndicador.find(valor => valor.data === date);
    return valorIndicador?.valor;
  }

  getIndicadorId(): IndicadorId {
    return this.indicadorId;
  }

}
