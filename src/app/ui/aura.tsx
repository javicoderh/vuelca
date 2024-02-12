'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lotus from '../../../public/lotus.svg';
import '../globals.css'

const Aura: React.FC = () => {
  const loveMessages = ["¿Sabías que la permacultura es un sistema de principios de diseño agrícola, económico, político y social basado en los patrones y las características del ecosistema natural?", "You make my heart smile", "I'm so lucky to have you"];
  const [messageIndex, setMessageIndex] = useState(0);
  const [vistaTooltip, setVistaTooltip] = useState(false)
  
  const cerrar = () => {
    setVistaTooltip(false)
  }
  const changeMessage = () => {
    setVistaTooltip(true)
    let newIndex = Math.floor(Math.random() * loveMessages.length);
    while (newIndex === messageIndex) {
      newIndex = Math.floor(Math.random() * loveMessages.length);
    }
    setMessageIndex(newIndex);
  };

  return (
    <div className='aura-container'>
      {vistaTooltip? <div className='hidden md:block tooltip'>{loveMessages[messageIndex]} <br />
        <button className='cerrar' onClick={cerrar}>cerrar</button>
      </div>:  null}
    {vistaTooltip? <div className='md:hidden tooltip-mobile'>{loveMessages[messageIndex]} <br />
      <button className='cerrar' onClick={cerrar}>cerrar</button>
    </div>: null}
      <Image className='footer-img' onClick={changeMessage}  src={lotus} alt='footer' width='100' height='100' />
    </div>
  );
};

export default Aura;
