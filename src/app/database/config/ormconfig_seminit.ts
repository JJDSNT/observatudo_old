import "reflect-metadata"
import { DataSource } from "typeorm";

import { Localidade } from "../../models/Localidade";
import { Pais } from "../../models/Pais";
import { Estado } from "../../models/Estado";
import { Cidade } from "../../models/Cidade";
import { Indicador } from "../../models/Indicador";
import { Fonte } from "../../models/Fonte"
import { Eixo } from "@/app/models/Eixo";
import { ValorIndicador } from "@/app/models/ValorIndicador";

//import dotenv from "dotenv";

// Using environment variables
//console.log(dotenv.config());

//const connectDB =  new DataSource({
//    type: "postgres",
//    url: process.env.DATABASE_URI,
//    logging: false,
//    synchronize: true,
//    entities: ["./src/Entities/**/*.ts"],
//    extra: {
//        ssl: {
//            rejectUnauthorized: false
//        }
//    }
//})

// const DB = new DataSource({


//     //    entities: ["./src/Entities/**/*.ts"],
// })

//const db_path = path.join(process.cwd(), "src/app/database");
//console.log(db_path);
//HOST não é url
//docker run --rm --name test-instance -e POSTGRES_PASSWORD=password -p 5433:5432 postgres
const DB = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5433,
    username: "postgres",
    password: "password",
    database: "observatudo",
    logging: true,
    synchronize: true,
    entities: [Cidade, Eixo, Estado, Fonte, Indicador, Localidade, Pais, ValorIndicador],
    /*(extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }*/
})

/*
DB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })
*/
export default DB;