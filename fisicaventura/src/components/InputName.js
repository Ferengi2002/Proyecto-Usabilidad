import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import playButtonImage from '../assets/images/play-button.png';

const InputName = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '') {
      navigate('/second-screen'); // Navega a la segunda pantalla
    } else {
      alert('Por favor ingresa tu nombre'); // Mensaje opcional para asegurarse de que el nombre no esté vacío
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Ingresa Tu Nombre"
        value={name}
        onChange={handleChange}
        className="input-name"
      />
      <img
        src={playButtonImage}
        alt="Play Button"
        onClick={handleSubmit}
        className="play-button"
      />
    </div>
  );
};

export default InputName;
