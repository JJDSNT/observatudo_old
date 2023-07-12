import { NextResponse } from "next/server";
import { CreateDataController } from "../../controllers/CreateDataController";

export async function GET() {
    const controller = new CreateDataController();

    try {
        const result = await controller.createData();
        return NextResponse.json({ message: result }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}

