import "reflect-metadata"
import { Entity, Column, ManyToMany, JoinColumn, PrimaryColumn, OneToOne } from "typeorm";
import type { Relation } from "typeorm";
import { Indicador } from "./Indicador";
import { Cidade } from "./Cidade";
import { Estado } from "./Estado";

@Entity()
export class Localidade {
  @PrimaryColumn()
  codigo!: number; // Código IBGE como chave primária

  @Column()
  nome!: string;

  @ManyToMany("Indicador", "indicadores_localidades")
  indicadores!: Relation<Indicador>;
/*
  @OneToOne('Estado', { cascade: true })
  @JoinColumn({ name: "codigo", referencedColumnName: "codigo" })
  estado?: Relation<Estado>;

  @OneToOne('Cidade', { cascade: true })
  @JoinColumn({ name: "codigo", referencedColumnName: "codigo" })
  cidade?: Relation<Cidade>;
*/
  constructor(codigo: number, nome: string) {
    this.codigo = codigo;
    this.nome = nome;
  }
}
