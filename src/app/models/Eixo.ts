import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Unique } from 'typeorm';
import { Indicador } from "./Indicador";

export enum Eixos {
  Saude = 'Saúde',
  Educacao = 'Educação',
  AssistenciaSocial = 'Assistência social',
  Seguranca = 'Segurança',
  MeioAmbiente = 'Meio ambiente, urbanização e mobilidade',
  EconomiaFinancas = 'Economia & Finanças',
  Personalizado = 'Personalizado',
}

@Entity()
@Unique(['nome'])
export class Eixo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: Eixos })
  nome!: Eixos;

  @Column()
  icon!: string;

  @Column()
  cor!: string;

  @ManyToMany(() => Indicador, indicador => indicador.eixos)
  @JoinTable({ name: "indicador_eixo" })
  indicadores!: Indicador[];
  
  getIndicadores(): Indicador[] {
    return this.indicadores;
  }

}
