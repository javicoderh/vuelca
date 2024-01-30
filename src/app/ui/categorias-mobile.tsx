import React from 'react';
import Image from 'next/image';
import logo from '../../../public/forest.jpg';
import '../globals.css';
import Link from 'next/link';

const CategoriasMobile: React.FC = () => {
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
    <div 
      className='cat-mobile w-[100vw] md:hidden' 
      style={{ 
        overflowX: 'auto', 
        maxHeight: '100vh', 
        scrollbarWidth: 'thin',
        scrollbarColor: 'goldenrod silver', // goldenrod for thumb, silver for track
      }}
    >
      <ul 
        className='cat-ul' 
        style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '16px' }}
      >
        {categorias.map((categoria, index) => (
          <Link href={categoria.href} key={categoria.name}>
            <li 
              className='cat-children' 
              key={index} 
              style={{ flex: '0 0 auto', textAlign: 'center' }}
            >
              <Image 
                className='circular-cat' 
                src={categoria.imageSrc} 
                alt={categoria.name} 
                title={categoria.tooltip} 
                width='50' 
                height='75' 
              />
              <p className='text-white mt-4'>{categoria.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriasMobile;
