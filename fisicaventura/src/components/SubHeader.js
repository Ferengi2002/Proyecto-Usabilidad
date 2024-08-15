import React from 'react'
import { useUserName } from './UserName'
import Timer from './Timer';

export default function SubHeader() {
  const { name } = useUserName();
  return (
  <div className='container' tabindex="0">
    <div className='timer-container' tabindex="0">
      <h3 tabindex="0">Nombre:</h3>
      <h3 className='text-timer' tabindex="0">{name || 'Nombre'}</h3>
      <div tabindex="0">
        <Timer tabindex="0"/>
      </div>
    </div>
  </div>
  );
}
