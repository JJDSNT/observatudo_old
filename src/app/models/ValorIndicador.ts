import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Indicador } from "./Indicador";

@Entity()
export class ValorIndicador {
  @PrimaryColumn()
  localidadeId!: number;

  @PrimaryColumn()
  indicadorId!: number;


  @ManyToOne('Localidade', 'valoresIndicador')
  @JoinColumn({ name: 'localidadeId' })
  localidade!: Relation<Localidade>;

  @ManyToOne('Indicador', 'valoresIndicador')
  @JoinColumn({ name: 'indicadorId' })
  indicador!: Relation<Indicador>;

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
