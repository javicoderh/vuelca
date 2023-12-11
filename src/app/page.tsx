import Image from 'next/image'
import arrow from '../../public/arrow.png'
import Categorias from './ui/categorias'
import lotus from '../../public/lotus.svg'
import Carousel from './ui/carousel'
import DinamicFooter from './ui/footer'
import InverseDinamicFooter from './ui/inverseFooter'



export default function Home() {
  
  return (    
      <main className='w-full h-[80vh] overflow-main p-3'>
        <Carousel />
        <Categorias />
      </main>
)}
