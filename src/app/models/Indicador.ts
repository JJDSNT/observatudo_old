import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { ValorIndicador } from "./ValorIndicador"

@Entity()
export class Indicador {
  constructor(
    nome: string,
    descricao: string,
    eixo: number,
  ){
    this.nome = nome;
    this.descricao = descricao;
    this.eixo = eixo;
  }
  @PrimaryGeneratedColumn()
  id!: number; // depois consertar isso, tem que ser uma chave composta id do source com o id do indicador 
  //provavelmente eu uma classe indicadorID

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @Column()
  eixo!: number;

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
