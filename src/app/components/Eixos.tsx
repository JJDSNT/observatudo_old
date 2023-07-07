import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { FaBicycle, FaGlobeAmericas, FaHeartbeat, FaHome, FaMoneyBillWave, FaQuestion, FaUserGraduate, FaShieldAlt } from 'react-icons/fa';

const Eixos = () => {
  const [eixos, setEixos] = useState([]);

  useEffect(() => {
    const fetchEixos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/eixos'); // Substitua pela URL correta
        setEixos(response.data.eixos);
      } catch (error) {
        console.error('Erro ao buscar os eixos:', error);
      }
    };

    fetchEixos();
  }, []);

  const renderIcon = (icon) => {
    switch (icon) {
      case 'FaHeartbeat':
        return <FaHeartbeat />;
      case 'FaUserGraduate':
        return <FaUserGraduate />;
      case 'FaHome':
        return <FaHome />;
      case 'FaShieldAlt':
        return <FaShieldAlt />;
      case 'FaGlobeAmericas':
        return <FaGlobeAmericas />;
      case 'FaMoneyBillWave':
        return <FaMoneyBillWave />;
      case 'FaQuestion':
        return <FaQuestion />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {eixos.map((eixo, index) => (
        <button
          key={index}
          type="button"
          className={`bg-orange-200 text-black border rounded-lg p-4 flex flex-col items-center justify-center space-y-2`}
        >
          <IconContext.Provider value={{ size: '2em' }}>
            {React.createElement(eixo.icon)}
          </IconContext.Provider>

          {renderIcon(eixo.icon)}
          <span>{eixo.nome}</span>
        </button>
      ))}
    </div>
  );
};

export default Eixos;
