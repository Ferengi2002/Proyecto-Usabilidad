import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div>
      <h3>Tiempo:</h3>
      <h3 className='text-timer'>{formatTime(minutes)}:{formatTime(seconds)}</h3>
    </div>
  );
};

export default Timer;
