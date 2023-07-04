import  DB  from '../database/config/ormconfig'
import { Estado } from "../models/Estado";
import { Cidade } from "../models/Cidade";
import { Indicador } from "../models/Indicador";
import { ValorIndicador } from "../models/ValorIndicador";

export async function rodarTeste() {
  console.log('oioioi');
  // Criar estados
  const estado1 = new Estado(10, "São Paulo", "SP");
  const estado2 = new Estado(20, "Rio de Janeiro", "RJ");
  const estado3 = new Estado(30, "Minas Gerais", "MG");

  // Salvar estados no banco de dados
  
  await DB.manager.save(estado1);
  /*
  await DB.manager.save(estado2);
  await DB.manager.save(estado3);*/
  console.log('estados salvos');
/*
  // Criar cidades
  const cidade1 = new Cidade(estado1, 1010, "Campos do Jordão");
  const cidade2 = new Cidade(estado1, 1011, "Campinas");
  const cidade3 = new Cidade(estado2, 2020, "Rio de Janeiro");
  const cidade4 = new Cidade(estado2, 2021, "Niterói");
  const cidade5 = new Cidade(estado3, 3030, "Belo Horizonte");
  const cidade6 = new Cidade(estado3, 3031, "Uberlândia");

  // Salvar cidades no banco de dados
  await DB.manager.save(cidade1);
  await DB.manager.save(cidade2);
  await DB.manager.save(cidade3);
  await DB.manager.save(cidade4);
  await DB.manager.save(cidade5);
  await DB.manager.save(cidade6);

  // Adicionar as cidades como cidades do estado
  estado1.cidades = [cidade1, cidade2];
  estado2.cidades = [cidade3, cidade4];
  estado3.cidades = [cidade5, cidade6];

  // Adicionar as cidades como capital de cada estado
  estado1.capital = cidade1;
  estado2.capital = cidade3;
  estado3.capital = cidade5;

  // Atualizar estados no banco de dados
  await DB.manager.save(estado1);
  await DB.manager.save(estado2);
  await DB.manager.save(estado3);
*/
  // Criar indicadores
  //const indicador1 = new Indicador("Indicador 1");
  //const indicador2 = new Indicador("Indicador 2");
  //const indicador3 = new Indicador("Indicador 3");

  // Salvar indicadores no banco de dados
  //await DB.manager.save(indicador1);
  //await DB.manager.save(indicador2);
  //await DB.manager.save(indicador3);

  // Criar valores de indicador para as localidades
  /*const localidades = [cidade1, cidade2, cidade3, cidade4, cidade5, cidade6];
  const valoresIndicador: ValorIndicador[] = [];

  for (const localidade of localidades) {
    for (let i = 1; i <= 4; i++) {
      const valor = new ValorIndicador();
      valor.indicador = i === 1 ? indicador1 : i === 2 ? indicador2 : indicador3;
      valor.localidade = localidade;
      valor.valor = Math.random() * 100; // Valor aleatório entre 0 e 100

      valoresIndicador.push(valor);
    }
  }
*/
  // Salvar valores de indicador no banco de dados
  //await DB.manager.save(valoresIndicador);

  return "Dados criados com sucesso!";
}
