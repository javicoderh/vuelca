import React from 'react';
import '../globals.css';
import { trpc } from '../_trpc/client';
import Link from 'next/link';
import Image from 'next/image';
import calendario from '../../../public/timetable.svg';

function ProximosEventos() {
  const { data: eventos, error, isLoading } = trpc.febrero.readAll.useQuery({
    mes: "febrero"
  }); 

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if fetching data fails
  }

  if (!eventos) {
    return <div>No events found.</div>;
  }

  return (
    <div className='proximosEventos hidden md:grid'>
      <h2 className='pl-[5px] mb-[25px]'>eventos febrero</h2>
      <ul className='proximos-eventos-ul'>
        {eventos.map((evento) => (
          <Link key={evento.nombre} href={'/'+evento.nombre}>
            <li>
              <h2 className='p-[3px]'>{evento.nombre}:</h2>
              <div className='flex flex-row bg-gray-500 text-black'>
                <h3 className='pl-[6px]'>{evento.mes} - {evento.fecha}</h3>
                <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
              </div>                        
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProximosEventos;
