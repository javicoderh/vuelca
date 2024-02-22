'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lotus from '../../../public/lotus.svg';
import '../globals.css'
import Link from 'next/link';

const Aura: React.FC = () => {
  const loveMessages = ["¿Sabías que la permacultura es un sistema de principios de diseño agrícola, económico, político y social basado en los patrones y las características del ecosistema natural?", "You make my heart smile", "I'm so lucky to have you"];
  const [messageIndex, setMessageIndex] = useState(0);
  const [vistaTooltip, setVistaTooltip] = useState('hidden')
  
  
  const cerrar = () => {
    setVistaTooltip('hidden')
  }
  const changeMessage = () => {
    let newIndex = Math.floor(Math.random() * loveMessages.length);
    while (newIndex === messageIndex) {
      newIndex = Math.floor(Math.random() * loveMessages.length);
    }
    setMessageIndex(newIndex);
  };

  const dirigirAProductos = () => {
  setVistaTooltip('productos')
  }

  const dirigirAWelcome = () => {
    if (vistaTooltip === 'tooltip' ) {
      changeMessage()      
    } else if (vistaTooltip === 'hidden') {      
      setVistaTooltip('welcome');
    }
    else  {
      setVistaTooltip('hidden')
    }
  }

  const dirigirAInformacion = () => {
  setVistaTooltip('información')
  }

  const dirigirATips = () => {
    setVistaTooltip('tooltip')
    }

  const dirigirACategorias = () => {
  setVistaTooltip('categorias')
  }
  const dirigirAPrecios = () => {
  setVistaTooltip('precios')
  }
  const dirigirAArticulos = () => {
  setVistaTooltip('articulos')
  }

  return (
   <div className='hidden md:flex aura-container'>
      {vistaTooltip == 'categorias'? <div className='tooltip-mobile2'>
                                    <h1 className='text-white'>¿Qué categoría de productos buscas?</h1>
                                    <div className='aura-categorias'>
                                    <Link href={'/categorias/salud'}> <button >Salud</button></Link> 
                                    <Link href={'/categorias/mujer'}><button >Mujer</button></Link>
                                    <Link href={'/categorias/permacultura'}><button >Permacultura</button></Link>
                                    <Link href={'/categorias/educacion'}><button >Educación</button></Link>
                                    <Link href={'/categorias/turismo'}><button >Turismo</button></Link>
                                    <Link href={'/categorias/redes'}><button >Redes</button></Link>
                                    <Link href={'/categorias/alimentacion'}><button >alimentación</button></Link> 
                                    <Link href={'/categorias/deportes'}><button >deportes</button></Link>
                                    <Link href={'/categorias/cultura'}><button >cultura</button></Link>
                                    <button onClick={dirigirATips} >tips</button>
                                    <button onClick={cerrar}>cerrar</button>
                                    </div>
                                    </div> : null}
      {vistaTooltip == 'welcome'? <div className='tooltip-mobile2 flex-tooltip'>
                                    <h1 className='text-white'>¿Qué estás buscando?</h1>
                                    <button onClick={dirigirACategorias}>productos</button> 
                                    <button onClick={dirigirAInformacion}>información</button>
                                    <Link href={'/calendario/interactivo'}><button onClick={dirigirAInformacion}>eventos</button></Link>
                                    <button onClick={dirigirATips}>tips</button>
                                    <button onClick={cerrar}>cerrar</button>
                                    </div>: null }
                                    {vistaTooltip == 'información'? <div className='tooltip-mobile2 flex-tooltip'>
                                    <h1 className='text-white'>¿Qué información necesitas?</h1>
                                    <Link href={'/nosotros'}><button>¿que es Vuelca?</button></Link>
                                    <Link href={'/precios'}><button>¿Cómo aparecer en vuelca?</button></Link>
                                    <Link href={'/articulos'}><button>Árticulos informativos</button></Link>                                    
                                    <button onClick={cerrar}>cerrar</button>
                                    </div>: null }                             
      {vistaTooltip == 'tooltip'? <div className='block tooltip-mobile2 text-white'>{loveMessages[messageIndex]} <br />
        <button className='cerrar' onClick={cerrar}>cerrar</button>
      </div>:  null}
      <Image className='footer-img' onClick={dirigirAWelcome}  src={lotus} alt='footer' width='100' height='100' />
    </div>
  );
};

export default Aura;
