import "reflect-metadata"
import { Entity, PrimaryColumn, ManyToOne, OneToOne } from "typeorm";
import type { Relation } from "typeorm";
import { Localidade } from "./Localidade";
import { Estado } from "./Estado";

@Entity()
export class Cidade extends Localidade {

  constructor(estado: Estado, codigo: number, nome: string) {
    super(codigo, nome);
    this.estado = estado;
  }

  @ManyToOne('Estado', 'cidades') //quick fix - https://github.com/typeorm/typeorm/issues/4190
  estado: Relation<Estado>;

  @PrimaryColumn()
  codigo!: number;
/*
  @OneToOne(() => Localidade, localidade => localidade.cidade)
  localidade!: Relation<Localidade>;
*/

}

