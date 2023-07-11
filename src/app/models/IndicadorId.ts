import { Column, Entity, PrimaryColumn } from "typeorm";

enum SourceIndicador {
    Fonte1 = "Fonte 1",
    Fonte2 = "Fonte 2",
    Fonte3 = "Fonte 3"
}

@Entity()
export class IndicadorId {
    private codigo_indicador: string;
    private source_indicador: SourceIndicador;
    private nome: string;
    private descricao: string;
    private dono: string;
    private email: string;


    @PrimaryColumn()
    codigo_indicador: string;

    @PrimaryColumn()
    @Column({ type: "enum", enum: SourceIndicador })
    source_indicador: SourceIndicador;

    @Column()
    nome: string;

    @Column()
    descricao: string;


    @Column({ nullable: true, type: 'text' })
    dono: string | null;

    @Column({ nullable: true, type: 'text' })
    email: string | null;

    constructor(
        codigo_indicador: string,
        source_indicador: SourceIndicador,
        nome: string,
        descricao: string,
        dono?: string,
        email?: string
    ) {
        this.codigo_indicador = codigo_indicador;
        this.source_indicador = source_indicador;
        this.nome = nome;
        this.descricao = descricao;
        this.dono = dono;
        this.email = email;
    }

    getCodigoIndicador(): string {
        return this.codigo_indicador;
    }

    setCodigoIndicador(codigo_indicador: string): void {
        this.codigo_indicador = codigo_indicador;
    }

    getSourceIndicador(): SourceIndicador {
        return this.source_indicador;
    }

    setSourceIndicador(source_indicador: SourceIndicador): void {
        this.source_indicador = source_indicador;
    }

    getNome(): string {
        return this.nome;
    }

    getDescricao(): string {
        return this.descricao;
    }

    getDono(): string {
        return this.dono;
    }

    setDono(dono: string): void {
        this.dono = dono;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}
