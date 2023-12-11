import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import arrow from '../../public/arrow.png'
import Image from 'next/image'
import InverseDinamicFooter from './ui/inverseFooter'
import Link from 'next/link'


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

  let route = '/'
  return (
    <html className='flex w-full h-[100vh] flex-col overflow items-center justify-center bg-blue-900' lang="en">
      <body className='flex w-full h-[100vh] flex-col overflow items-center justify-center bg-blue-900'>
      <div className="flex min-h-[100vh] flex-col min-w-full items-center justify-between">
      <header className='w-full h-[15vh] p-2'>
        <div className='flex logoCategorias2 flex-col'>
          <h1 className='title'>Vuelca</h1>
          <h2 className='subtitle'>directorio de empresas sustentables</h2>
          <Image
          className='logo-setup'
          src={arrow}
          width='100'
          height='100'
          alt='next'
        />
        </div>
        <nav className='flex flex-row w-full items-center justify-center nav-setup md:mt-9'>
          <Link
          href={route}
          >
          <li>Home</li></Link>
          <li>Galeria</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </nav>
      </header>
      {children}
      <InverseDinamicFooter />
    </div>         
      </body>       
    </html>
  )
}
