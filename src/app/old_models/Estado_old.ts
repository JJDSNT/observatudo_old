import { Cidade } from '../models/Cidade';
import { Localidade } from '../models/Localidade';

export class Estado extends Localidade {

  private cidades: Cidade[];
  private capital: Cidade;

  constructor(public uf: string, id: number, codigo: number, nome: string, capital: Cidade) {
    super(codigo, nome);
    this.cidades = [];
    this.capital = this.cidades[0];
  }

  public adicionarCidade(cidade: Cidade): void {
    this.cidades.push(cidade);
  }

  public getCidades(): Cidade[] {
    return this.cidades;
  }

  public getCapital(): Cidade {
    return this.capital;
  }

}
