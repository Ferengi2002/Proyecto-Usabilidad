// InputName.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaginaPrincipal.css';
import { useUserName } from './UserName';
import playButtonImage from '../assets/images/play-button.png';

const InputName = () => {
  const [localName, setLocalName] = useState('');
  const { setName } = useUserName();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocalName(e.target.value);
  };

  const handleSubmit = () => {
    if (localName.trim() !== '') {
      setName(localName);
      navigate('/second-screen');
    } else {
      alert('Por favor ingresa tu nombre');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={localName}
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
