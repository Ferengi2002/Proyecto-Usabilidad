import React, { useState } from 'react';
import '../App.css';
import Feedback from './Feedback'; // Importa el nuevo componente de retroalimentación
import correctImage from '../assets/images/correct.png'; // Reemplaza con la ruta correcta de tu imagen
import incorrectImage from '../assets/images/incorrect.png'; // Reemplaza con la ruta correcta de tu imagen


const Question = ({ questionNumber, questionText, questionImage, options, correctOption, onResult }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false); // Estado para mostrar u ocultar el feedback

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswerCorrect(option === correctOption);
    onResult(option === correctOption); // Llama a la función onResult con el resultado
  };

  const handleOkClick = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
  };

  const handleFeedbackClick = () => {
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-number">Pregunta {questionNumber}</div>
        {questionImage && <img src={questionImage} alt="Pregunta" className="question-image" />}
      </div>
      <div className="question-text">{questionText}</div>
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="hint">
        <a href="#hint" onClick={handleFeedbackClick}>¿No sabes la respuesta?</a>
      </div>

      {/* Modal de respuesta correcta o incorrecta */}
      {selectedOption && (
        <div className="answer-modal">
          <img
            src={isAnswerCorrect ? correctImage : incorrectImage}
            alt={isAnswerCorrect ? 'Respuesta Correcta' : 'Respuesta Incorrecta'}
            className="modal-image"
          />
          <div className="ok-button" onClick={handleOkClick}>
            OK
          </div>
        </div>
      )}

      {/* Componente de retroalimentación */}
      {showFeedback && <Feedback onClose={handleCloseFeedback} />}
    </div>
  );
};

export default Question;
