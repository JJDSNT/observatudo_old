import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, Unique, PrimaryGeneratedColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Indicador } from "./Indicador";

@Entity()
@Unique(['localidade', 'indicador','data'])
export class ValorIndicador {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne('Indicador', 'valoresIndicador')
  @JoinColumn({ name: 'indicadorId' })
  indicador!: Relation<Indicador>;

  @ManyToOne('Localidade', 'valoresIndicador')
  @JoinColumn({ name: 'codigo' })
  localidade!: Relation<Localidade>;

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
