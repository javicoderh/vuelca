import DinamicFooter from "../ui/footer"
import '../globals.css'
import arrow from '../../../public/arrow.png'
import Image from "next/image"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {

  let href = '/'

    return (
        <div className="flex overflow min-h-screen flex-col min-w-full items-center justify-between">
        <header className='w-full h-[15vh] p-2'>
          <div className='flex logoCategorias flex-col'>
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
          <nav className='flex flex-row w-full items-center justify-center nav-setup'>
            <Link href={href}>
              <li>Home</li>
            </Link>
            <li>Galeria</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </nav>
        </header>
          {children}
        <DinamicFooter />
      </div>
  )}
    