import "reflect-metadata"
import { Entity, Column, ManyToMany, JoinTable, PrimaryColumn, Relation } from "typeorm";
import { Indicador } from "./Indicador";

@Entity()
export abstract class Localidade {
  @PrimaryColumn()
  codigo!: number; // Código IBGE como chave primária

  @Column()
  nome!: string;

  @ManyToMany("Indicador", "indicadores_localidades")
  indicadores!: Relation<Indicador>;

  constructor(codigo: number, nome: string) {
    this.codigo = codigo;
    this.nome = nome;
  }
}
