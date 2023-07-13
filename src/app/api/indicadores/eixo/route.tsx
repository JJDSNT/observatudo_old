/**
 * @swagger
 * /api/eixos:
 *   get:
 *     summary: Get eixos
 *     description: Retrieves a list of eixos.
 *     responses:
 *       200:
 *         description: Successful response with the list of eixos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 eixos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Eixo'
 *       500:
 *         description: Error response with a message indicating the error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *     produces:
 *       - application/json
 *     tags:
 *       - Eixos
 */


import { NextResponse } from "next/server";
import { Container } from 'typedi';
import { EixoController } from "@/app/controllers/EixoController";


/*
const eixos = [
  { id: 1, nome: 'Saúde', icon: 'FaHeartbeat', cor: 'bg-red-500' },
  { id: 2, nome: 'Educação', icon: 'FaUserGraduate', cor: 'bg-blue-500' },
  { id: 3, nome: 'Assistência social', icon: 'FaHome', cor: 'bg-purple-500' },
  { id: 4, nome: 'Segurança', icon: 'FaShieldAlt', cor: 'bg-yellow-500' },
  { id: 5, nome: 'Meio ambiente, urbanização e mobilidade', icon: 'FaGlobeAmericas', cor: 'bg-green-500' },
  { id: 6, nome: 'Economia & Finanças', icon: 'FaMoneyBillWave', cor: 'bg-gray-500' },
  { id: 7, nome: 'Personalizado', icon: 'FaQuestion', cor: 'bg-indigo-500' },
];
*/

  export async function GET() {
    try {
      const eixoController = Container.get(EixoController);
      const eixos = await eixoController.getEixosComIndicadores();
      return NextResponse.json({ eixos });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
      }
      return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
    }
  }