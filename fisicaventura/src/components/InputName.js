import React, { useState } from 'react';

const InputName = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    // Logica para manejar el envío del nombre
    console.log(name);
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
      <button onClick={handleSubmit} className="submit-button"></button>
    </div>
  );
};

export default InputName;
