import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Localidade } from "./Localidade";
import { Indicador } from "./Indicador";

@Entity()
export class ValorIndicador {
  @PrimaryColumn()
  localidadeId!: number;

  @PrimaryColumn()
  indicadorId!: number;

  @ManyToOne(() => Localidade, localidade => localidade.valoresIndicador)
  @JoinColumn({ name: "localidadeId" })
  localidade!: Localidade;

  @ManyToOne(() => Indicador, indicador => indicador.valoresIndicador)
  @JoinColumn({ name: "indicadorId" })
  indicador!: Indicador;

  @Column({ type: "date" })
  data!: Date;

  @Column({ type: "float" })
  valor!: number;

  getValor(): number {
    return this.valor;
  }

  getLocalidade(): Localidade {
    return this.localidade;
  }

  getIndicador(): Indicador {
    return this.indicador;
  }
  
}
