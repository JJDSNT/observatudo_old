import { NextResponse } from "next/server";
import { CreateDataController } from "../../controllers/CreateDataController";

const createDataController = new CreateDataController();

export async function GET() {
    let resposta = await createDataController.createData();

    return NextResponse.json({ message: resposta }, { status: 200 });
}