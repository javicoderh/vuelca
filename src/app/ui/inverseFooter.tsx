'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lotus from '../../../public/lotus.svg'; 
import '../globals.css'
import Aura from './aura';
import AuraMobile from './auramobile';

const InverseDinamicFooter = () => {

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
    <footer className='w-full h-[0.5vh] flex flex-row items-center justify-center pt-5 p-2'>
        <h3 className='inverse-phrase-translate text-center md:footer-imgDesktop'>{currentPhrase}</h3>
        <Aura /> 
        <AuraMobile />   
    </footer>
  );
};

export default InverseDinamicFooter;
