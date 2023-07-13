/**
 * @swagger
 * /api/localidade:
 *   get:
 *     summary: Retorna os estados com suas cidades.
 *     responses:
 *       200:
 *         description: Retorna os estados com suas cidades.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estados:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Estado'
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *     components:
 *       schemas:
 *         Estado:
 *           type: object
 *           properties:
 *             estado:
 *               $ref: '#/components/schemas/InfoEstado'
 *             cidades:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cidade'
 *         InfoEstado:
 *           type: object
 *           properties:
 *             codigo:
 *               type: number
 *             nome:
 *               type: string
 *             sigla:
 *               type: string
 *         Cidade:
 *           type: object
 *           properties:
 *             codigo:
 *               type: number
 *             nome:
 *               type: string
 *             capital:
 *               type: string|null
 * 
 *     produces:
 *       - application/json
 *     tags:
 *       - Localidade
 * 
 */

import { NextResponse } from "next/server";
import { Container } from 'typedi';
import { LocalidadeController } from "@/app/controllers/LocalidadeController";

/**
 * @description Retorna o estado com suas cidades.
 * @returns {Promise<NextResponse>}
 */
export async function GET(): Promise<NextResponse> {
  try {
    const localidadeController = Container.get(LocalidadeController);
    const estados = await localidadeController.getEstadosECidades();
    return NextResponse.json({ estados });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}