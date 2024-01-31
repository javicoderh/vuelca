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
      <main className='w-full h-[90vh] flex flex-col overflow-main p-3'>
        <Carousel />
        <CategoriasMobile />        
        <Categorias /> 
        <p className='text-white introduccion hidden md:block'>Vuelca es una plataforma diseñada para reunir empresas que ofrecen distintos tipos de servicios y productos, 
        manteniendo un canon <br></br>de responsabilidad empresarial tanto con sus empleados como con la comunidad y el medio ambiente. <br></br>
        No las llamamos empresas b dado que una empresa b requiere algunos protocolos administrativos y nosotros incluimos tambien <br></br> emprendimientos
        emergentes que pueden estar aún en vías de certificarse y aún asi cumplir con esta responsabilidad antes mencionada.</p> 
        <Link className='md:hidden' href={interactivo}>
        <h2 className='calendario-tit-mobile'>Calendario 2024</h2>
        </Link>                      
        <Destacados /> 
        <DestacadosMobile /> 
        <Link className='hidden md:block' href={interactivo}>
        <p className='text-white calendario-p'>Revisa todos los eventos que tenemos para ti este 2024:</p>
        <h2 className='calendario-tit calendario-link'>Calendario 2024</h2>
        </Link>       
        <ProximosEventos />        
      </main>
)}
