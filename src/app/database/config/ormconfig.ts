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




// Using environment variables
//import dotenv from "dotenv";
//dotenv.config();

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
//     type: "sqlite",
//     database: "testtypeorm.sqlite",
//     synchronize: true,
//     logging: true,
//     entities: [Localidade, Estado, Cidade, Indicador, ValorIndicador,Eixo],
//     migrations: [],
//     subscribers: [],

//     //    entities: ["./src/Entities/**/*.ts"],
// })

//https://egkatzioura.com/2020/10/19/run-a-docker-postgresql-instance-locally-for-testing/
//const db_path = path.join(process.cwd(), "src/app/database");
//console.log(db_path);
//docker run --rm --name test-instance -e POSTGRES_PASSWORD=password -p 5433:5432 postgres
const DB =  new DataSource({
    type: "postgres",
    "host": process.env.TYPEORM_HOST,
    "port": Number(process.env.TYPEORM_PORT),
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "logging": Boolean(process.env.TYPEORM_LOGGING),
    "synchronize": Boolean(process.env.TYPEORM_SYNCHRONIZE),
    entities: [Cidade, Eixo, Estado, Fonte, Indicador, Localidade, Pais, ValorIndicador],
    /*extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }*/
})

import dotenv from "dotenv";

// Using environment variables
dotenv.config();
DB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default DB;