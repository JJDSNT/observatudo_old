import { NextResponse } from "next/server";
import { EstadoService } from "../../services/estadoService";
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
      //const estadoService = new EstadoService();
      //const estados = await estadoService.getEstados();
      return NextResponse.json({ eixos });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }