import React from 'react';
import Image from 'next/image';
import logo from '../../../public/forest.jpg'
import '../globals.css'
import Link from 'next/link';



const Categorias: React.FC = () => {

  type Category = {
    name: string;
    tooltip: string;
    imageSrc: any;
    href: string;
  };
  
  const categorias: Category[] = [
    { name: 'salud', tooltip: 'Description for salud completa', imageSrc: logo, href: '/categorias/salud' },
    { name: 'alimentación', tooltip: 'Description for alimentación regenerativa', imageSrc: logo, href: '/categorias/alimentacion' },
    { name: 'perma cultura', tooltip: 'Description for perma cultura', imageSrc: logo, href: '/categorias/permacultura' },
    { name: 'mujer', tooltip: 'Description for salud completa', imageSrc: logo, href: '/categorias/mujer' },
    { name: 'comunidades', tooltip: 'Description for alimentación regenerativa', imageSrc: logo, href: '/categorias/redes' },
    { name: 'educación', tooltip: 'Description for perma cultura', imageSrc: logo, href: '/categorias/educacion' },
    { name: 'deportes', tooltip: 'Description for salud completa', imageSrc: logo, href: '/categorias/deportes' },
    { name: 'cultura', tooltip: 'Description for alimentación regenerativa', imageSrc: logo, href: '/categorias/cultura' },
    { name: 'turismo', tooltip: 'Description for perma cultura', imageSrc: logo, href: '/categorias/turismo' },  
  ];

  return (
    
    <div className='w-full hidden md:grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-9 md:gap-5 md:grid-rows-5 mt-6 redimensionado'>
      {categorias.map((categoria, index) => (
        <Link
        href={categoria.href}
        key={categoria.name}
        >
        <div className='flex flex-col items-center justify-center high-layer' key={index}>
          <Image className='circular' src={categoria.imageSrc} alt={categoria.name} title={categoria.tooltip} width='50' height='75' />
          <p className='text-white mt-4'>{categoria.name}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Categorias;
