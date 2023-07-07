import { NextResponse } from "next/server";
import { Container } from 'typedi';
import { LocalidadeController } from "../../controllers/LocalidadeController";


//objetivo é retornar o estado com suas cidades
export async function GET() {
    try {
      const localidadeController = Container.get(LocalidadeController);
      const estados = await localidadeController.getEstadosECidades();
      return NextResponse.json({ estados });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }