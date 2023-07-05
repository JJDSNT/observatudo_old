import "reflect-metadata"
import { DataSource } from "typeorm";
import { Localidade } from "../../models/Localidade";
import { Indicador } from "../../models/Indicador";
import { Estado } from "../../models/Estado";
import { Cidade } from "../../models/Cidade";
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

const DB = new DataSource({
    type: "sqlite",
    database: "testtypeorm.sqlite",
    synchronize: true,
    logging: true,
    entities: [Localidade, Estado, Cidade, Indicador, ValorIndicador],
    migrations: [],
    subscribers: [],

    //    entities: ["./src/Entities/**/*.ts"],
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