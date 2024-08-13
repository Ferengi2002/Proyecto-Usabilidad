import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds === 59) {
          return { minutes: prevTime.minutes + 1, seconds: 0 };
        }
        return { ...prevTime, seconds: prevTime.seconds + 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div>
      <h3>Tiempo:</h3>
      <h3 className='text-timer'>
        {formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h3>
    </div>
  );
};

export default Timer;