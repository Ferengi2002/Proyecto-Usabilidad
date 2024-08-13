import React from 'react';
import SuggestionsForm from './SuggestionsForm';
import ErrorReportForm from './ErrorReportForm';
import logoImage from '../assets/images/logo.png'; // Asegúrate de que el logo esté en esta ubicación
import SubHeader from './SubHeader';

const SecondScreen = () => {
    return (
        <div>
          <SubHeader /> {/* Llama al componente SubHeader aquí */}
        </div>
      );
};

export default SecondScreen;
