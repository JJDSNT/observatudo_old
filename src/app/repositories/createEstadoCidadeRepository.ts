// import "reflect-metadata";
import DB from "../database/config/ormconfig";
import { Estado } from "../models/Estado";
import { Cidade } from "../models/Cidade";
import { DataSource, Repository } from "typeorm";

export class EstadoRepository {
  private estadoRepository: Repository<Estado>;
  private cidadeRepository: Repository<Cidade>;

  constructor(private dataSource: DataSource) {
    this.estadoRepository = DB.getRepository(Estado);
    this.cidadeRepository = DB.getRepository(Cidade);
  }

  public async createEstadosWithCidades(): Promise<void> {
    try {
      console.log("Inserting states with cities into the database...");

      const estado1 = new Estado(35,"São Paulo","SP", new Cidade (estado1,3550308,"São Paulo"));
      estado1.codigo = "SP";
      estado1.nome = "São Paulo";
      estado1.capital = new Cidade();
      estado1.capital.codigo = "3550308";
      estado1.capital.nome = "São Paulo";

      const estado2 = new Estado();
      estado2.codigo = "RJ";
      estado2.nome = "Rio de Janeiro";
      estado2.capital = new Cidade();
      estado2.capital.codigo = "3304557";
      estado2.capital.nome = "Rio de Janeiro";

      const estado3 = new Estado();
      estado3.codigo = "MG";
      estado3.nome = "Minas Gerais";
      estado3.capital = new Cidade();
      estado3.capital.codigo = "3106200";
      estado3.capital.nome = "Belo Horizonte";

      await this.estadoRepository.save([estado1, estado2, estado3]);

      console.log("States with cities were saved successfully!");
    } catch (error) {
      console.error("Error while creating states with cities:", error);
      throw error;
    }
  }
}
