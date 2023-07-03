import { Localidade } from './Localidade';
import { Estado } from './Estado';

export class Cidade extends Localidade {
  constructor(public estado: Estado, id: number, codigo: string, nome: string) {
    super(id, codigo, nome);
  }
}
