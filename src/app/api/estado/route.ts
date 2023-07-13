import { NextResponse } from "next/server";
import { Container } from 'typedi';
import { LocalidadeController } from "@/app/controllers/LocalidadeController";

/**
 * @swagger
 * /api/estado:
 *   get:
 *     summary: Get the list of states
 *     description: Returns a list of states.
 *     responses:
 *       200:
 *         description: Successful response with the list of states.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estados:
 *                   type: array
 *                   items:
 *                     type: string
 *     produces:
 *       - application/json
 *     tags:
 *       - Localidade
 */
export async function GET() {
  try {
    const localidadeController = Container.get(LocalidadeController);
    const estados = await localidadeController.getEstados();
    return NextResponse.json({ estados });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}