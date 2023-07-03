import { Localidade } from './Localidade';

export class Indicador {
    private valores: Map<Date, number>;

    constructor(
        public localidade: Localidade,
        public nome: string,
        public eixo: number,
    ) {
        this.valores = new Map<Date, number>();
    }

    public getValor(mes: Date): number | undefined {
        return this.valores.get(mes);
    }

    public getValores(): Map<Date, number> {
        return this.valores;
    }

    public setValor(valor: Map<Date, number>): void {
        this.valores = valor;
    }
}
