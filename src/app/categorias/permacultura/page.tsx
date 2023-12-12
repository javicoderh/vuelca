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
        <h1 className='text-white text-center w-full mb-5'>Permacultura</h1>
        <p className='text-white'>
                ................................................................<br/>
                ................................................................<br/>
                ................................................................<br/>
        </p>            
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 items-center justify-center mt-10 p-8 redimensionado2'>
          {permacultura.map((subcategoria) => (
            <div key={subcategoria.id} className='flex flex-col items-center justify-center'>
              <Image className='circular mb-8 p-[2px]' src={permacult} alt='permacultura' width='50' height='50' />
              <h3 className='text-white text-center subcat'>{subcategoria.name}</h3>
              <p className='text-white text-center w-[200px]'>{subcategoria.description}</p>
            </div>
          ))}
        </div>             
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
  )
}