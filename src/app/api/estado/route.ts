import { NextResponse } from "next/server";
import { EstadoService } from "../../services/estadoService";

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
 *       - States
 */
export async function GET() {
  try {
    const estadoService = new EstadoService();
    const estados = await estadoService.getEstados();
    return NextResponse.json({ estados });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
