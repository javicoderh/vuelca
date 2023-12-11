import Image from 'next/image'
import arrow from '../../public/arrow.png'
import Categorias from './ui/categorias'
import lotus from '../../public/lotus.svg'
import Carousel from './ui/carousel'
import DinamicFooter from './ui/footer'



export default function Home() {
  return (
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
        <nav className='flex flex-row w-full items-center justify-center nav-setup'>
          <li>Home</li>
          <li>Galeria</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </nav>
      </header>
      <main className='w-full h-[80vh] overflow-main p-3'>
        <Carousel />
        <Categorias />
      </main>
      <DinamicFooter />
    </div>
  )
}
