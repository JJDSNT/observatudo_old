import { NextRequest, NextResponse } from "next/server";
import IndicadorController from "../../controllers/IndicadorController";

//reflect metadata
//inicialize database?

export async function GET() {
    try {
        const indicadorController = new IndicadorController();
        const indicadores = await indicadorController.buscarTodosIndicadores();
        return NextResponse.json({ indicadores });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
