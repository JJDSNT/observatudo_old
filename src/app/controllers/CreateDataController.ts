import "reflect-metadata"
import DB from '../database/config/ormconfig_seminit'
import { Estado } from "../models/Estado";
import { Cidade } from "../models/Cidade";
import { Indicador } from "../models/Indicador";
import { IndicadorId } from "../models/IndicadorId";
import { ValorIndicador } from "../models/ValorIndicador";
import { Localidade } from "../models/Localidade";
import { Eixo, Eixos } from "../models/Eixo";


export class CreateDataController {

  public async createData() {

    DB.initialize().then(async () => {

      // Criar estados
      const localidade1 = new Localidade(10, "São Paulo");
      const estado1 = new Estado(10, "São Paulo", "SP");
      const localidade2 = new Localidade(20, "Rio de Janeiro");
      const estado2 = new Estado(20, "Rio de Janeiro", "RJ");
      const localidade3 = new Localidade(30, "Minas Gerais");
      const estado3 = new Estado(30, "Minas Gerais", "MG");


      // Salvar estados no banco de dados
      await DB.manager.save(localidade1);
      await DB.manager.save(estado1);
      await DB.manager.save(localidade2);
      await DB.manager.save(estado2);
      await DB.manager.save(localidade3);
      await DB.manager.save(estado3);

      // Criar cidades

      const localidade4 = new Localidade(1010, "Campos do Jordão");
      const cidade1 = new Cidade(estado1, 1010, "Campos do Jordão");
      const localidade5 = new Localidade(1011, "Campinas");
      const cidade2 = new Cidade(estado1, 1011, "Campinas");
      const localidade6 = new Localidade(2020, "Rio de Janeiro");
      const cidade3 = new Cidade(estado2, 2020, "Rio de Janeiro");
      const localidade7 = new Localidade(2021, "Niterói");
      const cidade4 = new Cidade(estado2, 2021, "Niterói");
      const localidade8 = new Localidade(3030, "Belo Horizonte");
      const cidade5 = new Cidade(estado3, 3030, "Belo Horizonte");
      const localidade9 = new Localidade(3031, "Uberlândia");
      const cidade6 = new Cidade(estado3, 3031, "Uberlândia");

      await DB.manager.save(localidade4);
      await DB.manager.save(localidade5);
      await DB.manager.save(localidade6);
      await DB.manager.save(localidade7);
      await DB.manager.save(localidade8);
      await DB.manager.save(localidade9);

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

      // Criar eixos
      const eixos = [
        { nome: Eixos.Saude, icon: 'FaHeartbeat', cor: 'bg-light-coral' },
        { nome: Eixos.Educacao, icon: 'FaUserGraduate', cor: 'bg-light-sky-blue' },
        { nome: Eixos.AssistenciaSocial, icon: 'FaHome', cor: 'bg-medium-slate-blue' },
        { nome: Eixos.Seguranca, icon: 'FaShieldAlt', cor: 'bg-orange' },
        { nome: Eixos.MeioAmbiente, icon: 'FaGlobeAmericas', cor: 'bg-yellow-green' },
        { nome: Eixos.EconomiaFinancas, icon: 'FaMoneyBillWave', cor: 'bg-dark-khaki' },
        { nome: Eixos.Personalizado, icon: 'FaQuestion', cor: 'bg-dim-grey' }
      ];

      const eixosCriados = [];

      for (const eixoData of eixos) {
        const eixo = new Eixo();
        eixo.nome = eixoData.nome;
        eixo.icon = eixoData.icon;
        eixo.cor = eixoData.cor;

        await DB.manager.save(eixo);
        eixosCriados.push(eixo);
      }


      // Criar indicadores
      enum SourceIndicador {
        Fonte1 = "Fonte 1",
        Fonte2 = "Fonte 2",
        Fonte3 = "Fonte 3"
    }

      const indicadorId1 = new IndicadorId(
        "indicador1",
        SourceIndicador.Fonte1,
        "Cobertura vacinal",
        "Esse indicador avalia a proporção de crianças e adultos que receberam as vacinas recomendadas pelas autoridades de saúde."
      );
      const indicador1 = new Indicador(indicadorId1, [eixosCriados[0]]);
      
      const indicadorId2 = new IndicadorId(
        "indicador2",
        SourceIndicador.Fonte2,
        "Índice de pobreza",
        "Esse indicador mede a proporção de pessoas que vivem abaixo da linha de pobreza em uma cidade."
      );
      const indicador2 = new Indicador(indicadorId2, [eixosCriados[2]]);
      
      const indicadorId3 = new IndicadorId(
        "indicador3",
        SourceIndicador.Fonte3,
        "Taxa de conclusão do ensino médio",
        "Esse indicador mede a proporção de jovens que concluem o ensino médio em relação à população em idade escolar adequada para esse nível de ensino"
      );
      const indicador3 = new Indicador(indicadorId3, [eixosCriados[1]]);
      
      const indicadorId4 = new IndicadorId(
        "indicador4",
        SourceIndicador.Fonte1,
        "Capacidade de pagamento",
        "Esse indicador mede a capacidade de pagamento"
      );
      const indicador4 = new Indicador(indicadorId4, [eixosCriados[5]]);
      

      // Salvar indicadores no banco de dados
      await DB.manager.save(indicadorId1);
      await DB.manager.save(indicador1);
      await DB.manager.save(indicadorId2);
      await DB.manager.save(indicador2);
      await DB.manager.save(indicadorId3);
      await DB.manager.save(indicador3);
      await DB.manager.save(indicadorId4);
      await DB.manager.save(indicador4);

      //const valorRepository = DB.manager.getRepository(ValorIndicador);
      // Criar valores de indicador para as localidades
      const localidades = [cidade1, cidade2, cidade3, cidade4, cidade5, cidade6];
      const valoresIndicador: ValorIndicador[] = [];

      let currentDate = new Date(); // Start with the current date

      for (const localidade of localidades) {
        for (let i = 1; i <= 4; i++) {
          const valor = new ValorIndicador();
          valor.indicador = i === 1 ? indicador1 : i === 2 ? indicador2 : i === 3 ? indicador3 : indicador4;
          valor.localidade = localidade;
          valor.valor = Math.random() * 100; // Valor aleatório entre 0 e 100
          valor.data = new Date(currentDate); // Assign a new instance of Date
          currentDate.setMonth(currentDate.getMonth() + i); // Increment the month by 1
          valoresIndicador.push(valor);
        }
      }


      console.log(valoresIndicador);

      // Salvar valores de indicador no banco de dados
      await DB.manager.save(valoresIndicador);
      console.log('dados criados');
      return "Dados criados com sucesso!";



      console.log("Here you can setup and run express / fastify / any other framework.")

    })
      .catch((err) => {
        console.log(err);
        return err;
      })
    //.catch(error => console.log(error))
    console.log('TESTANDO');
    return 'testando';

  }
}