import React, { useState, useEffect } from 'react';


interface Estado {
  estado: {
    codigo: string;
    sigla: string;
  };
  cidades: {
    codigo: string;
    nome: string;
  }[];
}

interface DropdownComboProps {
  onEstadoSelecionado: (codigoEstado: string) => void;
  onCidadeSelecionada: (codigoCidade: string) => void;
}

const DropdownCombo: React.FC<DropdownComboProps> = ({ onEstadoSelecionado, onCidadeSelecionada }) => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<Estado | null>(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<{ codigo: string; nome: string } | null>(null);


  useEffect(() => {
    const fetchEstadosECidades = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/localidade');
        const data = await response.json();
        //console.log(data);
        if (data && data.estados) {
          setEstados(data.estados);
          setEstadoSelecionado(data.estados[0] || null);
          setCidadeSelecionada((data.estados[0] && data.estados[0].cidades[0]) || null);
        }
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os estados e cidades:', error);
      }
    };

    fetchEstadosECidades();
  }, []);

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const estadoId = parseInt(event.target.value);
    const estado = estados.find((estado) => estado.estado.codigo === estadoId);
    setEstadoSelecionado(estado || null);
    setCidadeSelecionada(estado.cidades[0] || null);
  };

  const handleCidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const codigoCidade = event.target.value;
    const cidade = estadoSelecionado?.cidades.find((cidade) => cidade.codigo === codigoCidade);
    console.log(cidade);
    setCidadeSelecionada(cidade || null);
  };

  if (estados.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex">
      <div className="mr-4">
        <label htmlFor="estado" className="block mb-1 text-sm font-medium text-gray-700">
          Estado
        </label>
        <select
          id="estado"
          name="estado"
          className="block w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={estadoSelecionado.estado.codigo || ''}
          onChange={handleEstadoChange}
        >
          {estados.map((estado) => (
            <option key={estado.estado.codigo} value={estado.estado.codigo}>
              {estado.estado.sigla}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cidade" className="block mb-1 text-sm font-medium text-gray-700">
          Cidade
        </label>
        <select
          id="cidade"
          name="cidade"
          className="block w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={cidadeSelecionada?.codigo || ''}
          onChange={handleCidadeChange}
        >
          {estadoSelecionado.cidades.map((cidade) => (
            <option key={cidade.codigo} value={cidade.codigo}>
              {cidade.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownCombo;
