import Image from 'next/image'
import arrow from '../../../../public/arrow.png'
import Categorias from '../../ui/categorias'
import lotus from '../../../../public/lotus.svg'
import permacult from '../../../../public/permacultura.gif'
import Carousel from '../../ui/carousel'
import DinamicFooter from '../../ui/footer'
import '../../globals.css'
import { fetchPermacultura } from '@/app/lib/data';



export default async function Redes() {
 
  const permacultura = await fetchPermacultura();

  return (         
        <div className='w-full flex flex-col items-center justify-center '>
        
        </div>
  )
}