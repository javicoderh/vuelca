import Image from 'next/image'
import arrow from '../../public/arrow.png'
import Categorias from './ui/categorias'
import lotus from '../../public/lotus.svg'
import Carousel from './ui/carousel'
import DinamicFooter from './ui/footer'
import InverseDinamicFooter from './ui/inverseFooter'
import Destacados from './ui/destacados'
import ProximosEventos from './ui/proximosEventos'
import CalendarioInteractivo from './calendario/interactivo/page'
import Link from 'next/link'


const interactivo = '/calendario/interactivo'

export default function Home() {
  
  return (    
      <main className='w-full h-[80vh] overflow-main p-3'>
        <Carousel />        
        <Categorias />        
        <Destacados />
        <ProximosEventos />
        <Link href={interactivo}>
        <h2 className='calendario-tit'>Calendario 2024</h2>
        </Link>
      </main>
)}
