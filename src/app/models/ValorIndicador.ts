import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Indicador } from "./Indicador";

@Entity()
export class ValorIndicador {
  @ManyToOne('Indicador', 'valoresIndicador')
  @JoinColumn({ name: 'indicadorId' })
  indicador!: Relation<Indicador>;

  @PrimaryColumn({ type: "date" })
  data!: Date;

  @ManyToOne('Localidade', 'valoresIndicador')
  @JoinColumn({ name: 'codigo' })
  localidade!: Relation<Localidade>;


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
