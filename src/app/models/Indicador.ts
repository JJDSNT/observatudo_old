import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Eixo } from "./Eixos"
import { ValorIndicador } from "./ValorIndicador"

@Entity()
export class Indicador {
  constructor(
    nome: string,
    descricao: string,
    eixos: Eixo[],
  ){
    this.nome = nome;
    this.descricao = descricao;
    this.eixos = eixos;
  }
  @PrimaryGeneratedColumn()
  id!: number; // depois consertar isso, tem que ser uma chave composta id do source com o id do indicador 
  //provavelmente eu uma classe indicadorID

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @ManyToMany(() => Eixo)
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


}
