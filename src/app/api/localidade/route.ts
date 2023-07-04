import { NextResponse } from "next/server";
import { rodarTeste } from "../../controllers/TesteControler";

export async function GET() {
    let resposta = await rodarTeste();

    return NextResponse.json({ message: resposta }, { status: 200 });
}
