import { Cidade } from './Cidade';
import { Localidade } from './Localidade';

export class Estado extends Localidade {

  private cidades: Cidade[];
  private capital: Cidade;

  constructor(public uf: string, id: number, codigo: string, nome: string, capital: Cidade) {
    super(id, codigo, nome);
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
