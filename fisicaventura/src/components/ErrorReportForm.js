import React, { useState } from 'react';

const ErrorReportForm = () => {
  const [errorReport, setErrorReport] = useState('');

  const handleChange = (e) => {
    setErrorReport(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Error reportado:', errorReport);
    setErrorReport('');
  };

  return (
    <div className="form-container">
      <p>
        Si encontró algún error dentro del juego, puede comunicarse dentro de
        nuestros canales oficiales o escribirlo en la caja de texto
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={errorReport}
          onChange={handleChange}
          placeholder="Coloque el error que encontró"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ErrorReportForm;
