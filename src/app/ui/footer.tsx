'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lotus from '../../../public/lotus.svg'; 
import '../globals.css'

const DinamicFooter = () => {

  const phrases = [
    'Tenemos lo que necesitas para ser feliz',
    'Cultivate respetando tu entorno',
    'Conectando amantes de la vida'
  ];

  
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    const updatePhrase = () => {
      setFade(false); 

      setTimeout(() => {
        setCurrentPhrase(prevPhrase => {
          const nextIndex = (phrases.indexOf(prevPhrase) + 1) % phrases.length;
          return phrases[nextIndex];
        });
        setFade(true); 
      }, 4000); 
    };

    const intervalId = setInterval(updatePhrase, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className='w-full h-[6vh] flex flex-row items-center justify-center p-2'>
      <Image className='footer-img' src={lotus} alt='footer' width='100' height='100' />
      <h3 className={`text-center ${fade ? 'fade-in' : 'fade-out'}`}>{currentPhrase}</h3>
    </footer>
  );
};

export default DinamicFooter;
