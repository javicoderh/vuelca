import React from 'react';
import { useState, useEffect } from 'react';
import '../globals.css'
import { fetchEnero, fetchFebrero } from '../lib/data';
import Link from 'next/link';



async function ProximosEventos() {

let eventos = await fetchFebrero() 

  return (
   <div className='proximosEventos'>
    <h2>Próximos eventos</h2>
    <ul>
    {eventos.map((evento) => (                     
              <Link
              key={evento.nombre}
              href={evento.nombre}>
              <li>
              <h2 className='text-white mes text-center subcat'>{evento.nombre}</h2>
              <h3>{evento.fecha} de {evento.nombre}</h3>
              </li> 
              </Link>           
          ))}
    </ul>
   </div>
  );
};



export default ProximosEventos;
