import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { ValorIndicador } from "./ValorIndicador"

@Entity()
export class Indicador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @ManyToMany("Localidade", "indicadores_localidades")
  localidades!: Relation<Localidade>;

  @OneToMany(() => ValorIndicador, valorIndicador => valorIndicador.indicador)
  valoresIndicador!: ValorIndicador[];

  @Column("jsonb")
  valores!: Map<Date, number>;

  getValores(): ValorIndicador[] {
    return this.valoresIndicador;
  }

  getValor(date: Date): number | undefined {
    const valorIndicador = this.valoresIndicador.find(valor => valor.data === date);
    return valorIndicador?.valor;
  }

  getValores2(): Map<Date, number> {
    return this.valores;
  }

  getValor2(date: Date): number | undefined {
    return this.valores.get(date);
  }

}
