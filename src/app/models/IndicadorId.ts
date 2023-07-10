enum SourceIndicador {
    Fonte1 = "Fonte 1",
    Fonte2 = "Fonte 2",
    Fonte3 = "Fonte 3"
}

export class IndicadorId {
    private codigo_indicador: string;
    private source_indicador: SourceIndicador;
    private nome: string;
    private descricao: string;
    private dono: string;
    private email: string;

    constructor(
        codigo_indicador: string,
        source_indicador: SourceIndicador,
        nome: string,
        descricao: string,
        dono: string,
        email: string
    ) {
        this.codigo_indicador = codigo_indicador;
        this.source_indicador = source_indicador;
        this.nome = nome;
        this.descricao = descricao;
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
