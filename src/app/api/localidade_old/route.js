import { Estado } from '../../models/Estado';
import { Cidade } from '../../models/Cidade';
import { Indicador } from '../../models/Indicador';
import { IndicadorLocalidade } from '../../models/IndicadorLocalidade';
import { LocalidadeController } from '../../controllers/Localidade';

import { NextResponse } from "next/server";
import { convertCompilerOptionsFromJson } from 'typescript';

export async function GET(request) {
  // Do whatever you want

const localidadeController = new LocalidadeController();

// Criação dos Estados
const estado1 = new Estado('SP', 1, '01', 'São Paulo');
localidadeController.adicionarEstado(estado1);
const estado2 = new Estado('RJ', 2, '02', 'Rio de Janeiro');
localidadeController.adicionarEstado(estado2);
const estado3 = new Estado('MG', 3, '03', 'Minas Gerais');
localidadeController.adicionarEstado(estado3);

// Criação das Cidades
const cidade1 = new Cidade(estado1, 101, '0101', 'São Paulo');
const cidade2 = new Cidade(estado1, 102, '0102', 'Campinas');
const cidade3 = new Cidade(estado1, 103, '0103', 'Santos');
estado1.adicionarCidade(cidade1);
estado1.adicionarCidade(cidade2);
estado1.adicionarCidade(cidade3);

const cidade4 = new Cidade(estado2, 201, '0201', 'Rio de Janeiro');
const cidade5 = new Cidade(estado2, 202, '0202', 'Niterói');
const cidade6 = new Cidade(estado2, 203, '0203', 'Duque de Caxias');
estado2.adicionarCidade(cidade4);
estado2.adicionarCidade(cidade5);
estado2.adicionarCidade(cidade6);

const cidade7 = new Cidade(estado3, 301, '0301', 'Belo Horizonte');
const cidade8 = new Cidade(estado3, 302, '0302', 'Contagem');
const cidade9 = new Cidade(estado3, 303, '0303', 'Uberlândia');
estado3.adicionarCidade(cidade7);
estado3.adicionarCidade(cidade8);
estado3.adicionarCidade(cidade9);


// Obter a lista de cidades de um estado específico
console.log('inicio');
const cidadesEstado1 = estado1.getCidades();
console.log(cidadesEstado1); // exibe as cidades do estado1
console.log("FIM");


console.log(estado3.getCidades());

console.log('TESTANDO');


const cidadesEstado2 = estado2.getCidades(); //ok
console.log(cidadesEstado2); // exibe as cidades do estado2
console.log('novo');
//console.log(localidadeController.listarEstados());
console.log(localidadeController.getEstadoById(2).getCidades());

console.log('CIDADES');
console.log(localidadeController.getCidadesByEstado(2));


// Teste das classes
//console.log(estado1);
//console.log(cidade1);
//console.log(cidade9);



// Criando os objetos de Indicador
//const indicador1 = new Indicador('Indicador 1', 1);
//const indicador2 = new Indicador('Indicador 2', 2);

// Criando as associações entre Indicador e Localidade
//const indicadorLocalidade1 = new IndicadorLocalidade(indicador1, estado1);
//const indicadorLocalidade2 = new IndicadorLocalidade(indicador2, cidade2);

// Definindo valores para os IndicadorLocalidade
//indicadorLocalidade1.setValor(new Date(2023, 1, 1), 10);
//indicadorLocalidade2.setValor(new Date(2023, 1, 1), 20);
//indicadorLocalidade2.setValor(new Date(2023, 2, 1), 40);



//console.log(indicadorLocalidade2.getValores());
//console.log(indicadorLocalidade2.getValor(new Date(2023, 1, 1)));
//console.log(indicadorLocalidade2.getLocalidade());


return NextResponse.json({ message: "Localidades", estados: localidadeController.listarEstados() }, { status: 200 });
}
