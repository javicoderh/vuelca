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
import CategoriasMobile from './ui/categorias-mobile'
import DestacadosMobile from './ui/destacados-mob'


const interactivo = '/calendario/interactivo'

export default function Home() {
  
  return (    
      <main className='w-full h-[90vh] overflow-main p-3'>
        <Carousel />
        <CategoriasMobile />        
        <Categorias /> 
        <Link className='md:hidden' href={interactivo}>
        <h2 className='calendario-tit'>Calendario 2024</h2>
        </Link>               
        <Destacados /> 
        <DestacadosMobile /> 
        <Link className='hidden md:block' href={interactivo}>
        <h2 className='calendario-tit'>Calendario 2024</h2>
        </Link>       
        <ProximosEventos />        
      </main>
)}
