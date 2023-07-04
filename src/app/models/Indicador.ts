import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from "typeorm";
import { Localidade } from "./Localidade";

@Entity()
export class Indicador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @ManyToMany("Localidade", "indicadores_localidades")
  localidades: Relation<Localidade>;
}
