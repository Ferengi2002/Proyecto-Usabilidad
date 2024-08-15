import React, { useState } from 'react';
import SubHeader from './SubHeader';
import Roulette from './Roulette';
import Instructions from './Instructions';
import Question from './Question';  // Importa el componente Question

const SecondScreen = () => {
    const [showRoulette, setShowRoulette] = useState(true);

    const handleClose = () => {
        setShowRoulette(false);
        // Cuando se cierra la ruleta, se puede navegar aqui a otro componente
    };

    // Para que se muestre nuevamente la ruleta
    const showRouletteAgain = () => {
      setShowRoulette(true);
    };

    return (
        <div>
            <SubHeader />
            {/* {showRoulette && <Roulette onClose={handleClose} />} */}
            {/* Puedes agregar aquí otros componentes o lógica para mostrar 
            cuando la ruleta esté cerrada */}
            <Instructions />
            
            {/* Componente para mostrar la pregunta cargada */}
            <Question />
        </div>
    );
};

export default SecondScreen;
