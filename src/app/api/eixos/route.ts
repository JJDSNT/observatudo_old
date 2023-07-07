import { NextResponse } from "next/server";
import { EstadoService } from "../../services/estadoService";

const eixos = [
    { id: 1, nome: 'Saúde', icon: 'FaHeartbeat', cor: 'bg-light-coral' },
    { id: 2, nome: 'Educação', icon: 'FaUserGraduate', cor: 'bg-light-sky-blue' },
    { id: 3, nome: 'Assistência social', icon: 'FaHome', cor: 'bg-medium-slate-blue' },
    { id: 4, nome: 'Segurança', icon: 'FaShieldAlt', cor: 'bg-orange' },
    { id: 5, nome: 'Meio ambiente', icon: 'FaGlobeAmericas', cor: 'bg-yellow-green' },
    { id: 6, nome: 'Economia & Finanças', icon: 'FaMoneyBillWave', cor: 'bg-dark-khaki' },
    { id: 7, nome: 'Personalizado', icon: 'FaQuestion', cor: 'bg-dim-grey' },
  ];

  export async function GET() {
    try {
      //const estadoService = new EstadoService();
      //const estados = await estadoService.getEstados();
      return NextResponse.json({ eixos });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }