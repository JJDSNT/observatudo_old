import { NextRequest, NextResponse } from "next/server";
import IndicadorController from "../../controllers/IndicadorController";


export async function GET(req: NextRequest) {
    try {
        const indicadorController = new IndicadorController();
        const indicadores = await indicadorController.buscarTodosIndicadores(req);
        return NextResponse.json({ indicadores });
    } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json({ message: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
      }
}
