import "reflect-metadata";
import { openDatabase } from '../../../database/database';
import { Estado } from "../../../models/Estado";
import { Cidade } from "../../../models/Cidade";

async function createStatesAndCities() {
  try {
    // Criar a conexão com o banco de dados
    await createConnection();

    // Criar três estados
    const estado1 = new Estado("SP", "São Paulo", "São Paulo");
    const estado2 = new Estado("RJ", "Rio de Janeiro", "Rio de Janeiro");
    const estado3 = new Estado("MG", "Minas Gerais", "Belo Horizonte");

    // Adicionar três cidades a cada estado
    estado1.cidades = [
      new Cidade(estado1, "3550308", "São Paulo"),
      new Cidade(estado1, "3509502", "Campinas"),
      new Cidade(estado1, "3548708", "Guarulhos"),
    ];

    estado2.cidades = [
      new Cidade(estado2, "3304557", "Rio de Janeiro"),
      new Cidade(estado2, "3300100", "Angra dos Reis"),
      new Cidade(estado2, "3300704", "Búzios"),
    ];

    estado3.cidades = [
      new Cidade(estado3, "3106200", "Belo Horizonte"),
      new Cidade(estado3, "3122304", "Contagem"),
      new Cidade(estado3, "3106705", "Betim"),
    ];

    // Salvar os estados e cidades no banco de dados
    await estado1.save();
    await estado2.save();
    await estado3.save();

    console.log("Estados e cidades foram salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar estados e cidades:", error);
  }
}

createStatesAndCities();
