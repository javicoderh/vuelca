import React from 'react';
import '../globals.css';
import { fetchFebrero } from '../lib/data';
import Link from 'next/link';
import '../globals.css';
import Image from 'next/image';
import calendario from '../../../public/timetable.svg'


async function ProximosEventos() {
  const eventos = await fetchFebrero();

  return (
    <div className='proximosEventos hidden md:grid'>
      <h2 className='mb-[25px]'>Este mes:</h2>
      <ul className='proximos-eventos-ul'>
        {eventos.map((evento: any) => (
          <Link key={evento.nombre} href={'/'+evento.nombre}>
            <li>
                <h2 className='p-[3px]'>{evento.nombre}:</h2>
                <div className='flex flex-row'>
                    <h3 className='pl-[6px]'>febrero {evento.fecha}</h3>
                    <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
                </div>                        
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProximosEventos;

