'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lotus from '../../../public/lotus.svg'; 
import '../globals.css'

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
    <footer className='w-full h-[6vh] flex flex-row items-center justify-center p-2'>
        <h3 className='inverse-phrase-translate text-center md:footer-imgDesktop'>{currentPhrase}</h3>
        <Image className='inverse-footer-img' src={lotus} alt='footer' width='100' height='100' />     
    </footer>
  );
};

export default InverseDinamicFooter;
