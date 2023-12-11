import Image from 'next/image'
import arrow from '../../../../public/arrow.png'
import Categorias from '../../ui/categorias'
import lotus from '../../../../public/lotus.svg'
import Carousel from '../../ui/carousel'
import DinamicFooter from '../../ui/footer'
import '../../globals.css'



export default function Rutas() {

  return (    
      <main className='w-full hide-scrollbar flex flex-col h-[80vh] overflow-main p-3'>
        <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-white text-center w-full mb-5'>Salud Completa</h1>
        <p className='text-white'>
                ................................................................<br/>
                ................................................................<br/>
                ................................................................<br/>
        </p>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center mt-10'>
                <div className='flex flex-col items-center justify-center'>
                  <Image className='footer-img' src={lotus} alt='footer' width='50' height='50' />
                  <h3 className='text-white'>subcategoria.name</h3>
                  <p className='text-white'>subcategoria.description</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <Image className='footer-img' src={lotus} alt='footer' width='50' height='50' />
                  <h3 className='text-white'>subcategoria.name</h3>
                  <p className='text-white'>subcategoria.description</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <Image className='footer-img' src={lotus} alt='footer' width='50' height='50' />
                  <h3 className='text-white'>subcategoria.name</h3>
                  <p className='text-white'>subcategoria.description</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <Image className='footer-img' src={lotus} alt='footer' width='50' height='50' />
                  <h3 className='text-white'>subcategoria.name</h3>
                  <p className='text-white'>subcategoria.description</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <Image className='footer-img' src={lotus} alt='footer' width='50' height='50' />
                  <h3 className='text-white'>subcategoria.name</h3>
                  <p className='text-white'>subcategoria.description</p>
                </div>
            </div>              
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g?si=Cqwld_dMR_OTazPP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </main>
  )
}