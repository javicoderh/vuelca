import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import arrow from '../../public/arrow.png'
import Image from 'next/image'
import InverseDinamicFooter from './ui/inverseFooter'
import Link from 'next/link'
import calendario from '../../public/timetable.svg'
import Calendario from './ui/calendar'
import Provider from '../../_trpc/Provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let home = '/'
  let hrefCalendario = '/calendario'
  return (
    <html className='flex background w-full h-[100vh] flex-col overflow items-center justify-center bg-blue-900' lang="en">
      <body className='flex w-full h-[100vh] flex-col overflow items-center justify-center'>
        <Provider>
      <div className="flex min-h-[100vh] flex-col min-w-full items-center justify-between pb-[65px] md:pb-[0px]">
      <header className='w-full h-[15vh] p-2'>
        <div className='flex logoCategorias2 flex-col'>
          <h1 className='title hidden md:block'>Vuelca</h1>
          <h1 className='title2 block md:hidden'>Vuelca</h1>
          <h2 className='subtitle md:hidden'>directorio de empresas sustentables</h2>
          <h2 className='subtitle-desktop hidden md:block'>directorio de empresas sustentables</h2>
          <Image
          className='logo-setup'
          src={arrow}
          width='100'
          height='100'
          alt='next'
        />
        </div>
        <nav className=' md:flex-row w-full hidden md:flex items-center justify-center nav-setup2 md:mt-9'>
          <Link
          href={home}
          >
          <li>Home</li></Link>
          <li>Galeria</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </nav>
        <nav className='flex flex-row w-full md:hidden items-center justify-center nav-setup md:mt-9'>
          <Link
          href={home}
          >
          <li>Home</li></Link>
          <li>Galeria</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </nav>
        <Calendario />
      </header>           
          {children}         
      <InverseDinamicFooter />
    </div>
    </Provider>        
      </body>       
    </html>
  )
}
