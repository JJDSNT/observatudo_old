
//https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { NextResponse } from "next/server";
import { EstadoService } from "../services/estadoService";


export async function GET() {
  try {
    const estadoService = new EstadoService();
    const estados = await estadoService.getEstados();
    return NextResponse.json({ estados });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

