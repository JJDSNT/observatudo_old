import { NextResponse } from "next/server";

import DB from '../../database/config/ormconfig';

import { Estado } from '../../models/Estado';
import { Cidade } from '../../models/Cidade';

import { EstadoRepository } from "@/app/repositories/EstadoRepository";
import { CidadeRepository } from "@/app/repositories/CidadeRepository";
import { LocalidadeService } from "@/app/services/localidadeService";

export async function GET() {
    //const estadoRepository = new EstadoRepository(Estado,);
    //const cidadeRepository = new CidadeRepository;
    //const localidadeService = new LocalidadeService(estadoRepository,cidadeRepository);

    // Verifique se o DataSource está inicializado
    console.log('+++++++++++++++++++++++++++++++++++++++++++++==================');
    if (!DB.isInitialized) {
        // Inicialize o DataSource
        await DB.initialize();
        console.log(DB.isInitialized);
    }

    const entityManager = DB.manager;

    // Create a new Estado
    const estado = new Estado(35, 'São Paulo', 'SP');

    // Create a new Cidade
    const cidade = new Cidade(estado, 35101, 'São Paulo');

    // Assign the Cidade as the capital of the Estado
    estado.capital = cidade;

    // Save the Estado and Cidade using the EntityManager
    await entityManager.save(estado);
    await entityManager.save(cidade);

    /*
        // Criação dos Estados
        const estado1 = new Estado(35,'São Paulo','SP');
        localidadeService.adicionarEstado(estado1);
    
        const estado2 = new Estado(33,'Rio de Janeiro','RJ');
        localidadeService.adicionarEstado(estado2);
    
        const estado3 = new Estado(31,'Minas Gerais','MG');
        localidadeService.adicionarEstado(estado3);
    
        // Criação das Cidades
        const cidade1 = new Cidade(estado1, 35101, 'São Paulo');
        const cidade2 = new Cidade(estado1, 35102, 'Campinas');
        const cidade3 = new Cidade(estado1, 35103, 'Santos');
        estado1.adicionarCidade(cidade1);
        estado1.adicionarCidade(cidade2);
        estado1.adicionarCidade(cidade3);
    
        const cidade4 = new Cidade(estado2, 3304557, 'Rio de Janeiro');
        const cidade5 = new Cidade(estado2, 33202, 'Niterói');
        const cidade6 = new Cidade(estado2, 33203, 'Duque de Caxias');
        estado2.adicionarCidade(cidade4);
        estado2.adicionarCidade(cidade5);
        estado2.adicionarCidade(cidade6);
    
        const cidade7 = new Cidade(estado3, 31301, 'Belo Horizonte');
        const cidade8 = new Cidade(estado3, 31302, 'Contagem');
        const cidade9 = new Cidade(estado3, 31303, 'Uberlândia');
        estado3.adicionarCidade(cidade7);
        estado3.adicionarCidade(cidade8);
        estado3.adicionarCidade(cidade9);
    
        estado1.adicionarCapital(cidade1);
        estado2.adicionarCapital(cidade4);
        estado3.adicionarCapital(cidade7);
    
        // Salvar os estados e cidades no banco de dados
        await estadoRepository.save(estado1);
        await estadoRepository.save(estado2);
        await estadoRepository.save(estado3);
    
        // Retorne a resposta adequada da sua rota
        // Por exemplo, retornar a lista de estados
    */

    return NextResponse.json({ message: "Localidades" }, { status: 200 });
}
