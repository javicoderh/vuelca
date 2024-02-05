import React from 'react';
import Image from 'next/image';
import salud from '../../../public/salud.jpg'
import permacultura from '../../../public/permacultura.jpg'
import mujer from '../../../public/mujer.jpg'
import comunidades from '../../../public/comunidades.jpg'
import educacion from '../../../public/educacion.jpg'
import deportes from '../../../public/deportes.jpg'
import cultura from '../../../public/cultura.jpg'
import turismo from '../../../public/turismo.jpg'
import alimentacion from '../../../public/alimentacion.png'
import '../globals.css'
import Link from 'next/link';



const CategoriasMobile: React.FC = () => {

  type Category = {
    name: string;
    tooltip: string;
    imageSrc: any;
    href: string;
  };
  
  const categorias: Category[] = [
    { name: 'salud', tooltip: 'Description for salud completa', imageSrc: salud, href: '/categorias/salud' },
    { name: 'alimentación', tooltip: 'Description for alimentación regenerativa', imageSrc: alimentacion, href: '/categorias/alimentacion' },
    { name: 'perma cultura', tooltip: 'Description for perma cultura', imageSrc: permacultura, href: '/categorias/permacultura' },
    { name: 'mujer', tooltip: 'Description for salud completa', imageSrc: mujer, href: '/categorias/mujer' },
    { name: 'comunidades', tooltip: 'Description for alimentación regenerativa', imageSrc: comunidades, href: '/categorias/redes' },
    { name: 'educación', tooltip: 'Description for perma cultura', imageSrc: educacion, href: '/categorias/educacion' },
    { name: 'deportes', tooltip: 'Description for salud completa', imageSrc: deportes, href: '/categorias/deportes' },
    { name: 'cultura', tooltip: 'Description for alimentación regenerativa', imageSrc: cultura, href: '/categorias/cultura' },
    { name: 'turismo', tooltip: 'Description for perma cultura', imageSrc: turismo, href: '/categorias/turismo' },  
  ];

  return (
    <div 
      className='cat-mobile w-[100vw] md:hidden' 
      style={{ 
        overflowX: 'auto', 
        maxHeight: '100vh', 
        scrollbarWidth: 'thin',
        scrollbarColor: 'goldenrod'
      }}
    >
      <ul 
        className='cat-ul' 
        style={{ listStyle: 'none', paddingLeft: 680, margin: 0, display: 'flex', gap: '8px' }}
      >
        {categorias.map((categoria, index) => (
          <Link href={categoria.href} key={categoria.name}>
            <li 
              className='cat-children' 
              key={index} 
              style={{ flex: '0 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
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
