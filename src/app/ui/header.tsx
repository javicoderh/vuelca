import React from 'react';
import Image from 'next/image';
import logo from '../../../public/arrow.png'
import '../globals.css'
import Link from 'next/link';



const Header: React.FC = () => {

 const home = '/';
 const nosotros = '/nosotros';
 const contacto = '/contacto';

  return (
    
    <header className='newHeader'>
      <div className='flex flex-col newLogo md:ml-10'>
        <h1 className='text-white mb-2'>Vuelca</h1>
        <Image className='nLogoImg' src={logo} width={200} height={100} alt='logo' />
        <nav className='text-white w-full flex flex-row'>
          <Link
          href={home}
          >
            <li>Home</li>
          </Link>
          <Link
          href={nosotros}
          >
            <li>Nosotros</li>
          </Link>
          <Link
          href={contacto}
          >
            <li>Contacto</li>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
