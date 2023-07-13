import { NextRequest, NextResponse } from "next/server";
import IndicadorController from "../../controllers/IndicadorController";


export async function GET(req: NextRequest) {
    try {
        const indicadorController = new IndicadorController();
        const indicadores = await indicadorController.buscarTodosIndicadores(req);
        return NextResponse.json({ indicadores });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
