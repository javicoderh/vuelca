import Image from 'next/image'
import salud from '../../../../public/salud.jpg'
import '../../globals.css'
import Link from 'next/link'

interface Subcategoria {
  nombre: string;
  descripcion: string;
  imgurl: any;
  link: string;
}

interface Subcategorias {
  [key: string]: Subcategoria;
}

export default function Rutas() {
  const subcategorias: Subcategorias = {
    Bioconstruccion: {
      nombre: 'Bioconstrucción',
      descripcion: 'Disminuye el costo de tu huella medioambiental al construir sin perder calidad.',
      imgurl: salud,
      link: 'categorias/permacultura/Bioconstruccion'
    },
    Agroecologia: {
      nombre: 'Agroecología',
      descripcion: 'huertas orgánicas, bosques y productos orgánicos para tus cultivos',
      imgurl: salud,
      link: 'categorias/permacultura/agroecologia'
    },
    Yoga: {
      nombre: 'Gestión de residúos',
      descripcion: 'gestiona tus residuos para que puedan ser reciclados y no contaminen el medio ambiente',
      imgurl: salud,
      link: 'categorias/permacultura/residuos'
    },
    Aguas: {
      nombre: 'Manejo de aguas',
      descripcion: 'optimiza el maximo el uso de tu agua y no contamines las fuentes naturales de agua.',
      imgurl: salud,
      link: 'categorias/permacultura/aguas'
    },
    Asentamientos: {
      nombre: 'Asentamientos sustentables',
      descripcion: 'todo lo que necesitas para tus asentamientos sostenibles en medio de la naturaleza.',
      imgurl: salud,
      link: 'categorias/permacultura/asentamientos'
    }
  };

  return (    
    <div className='w-full categoria-container flex flex-col items-center justify-center p-2'>
      <h1 className='text-white'>Permacultura</h1>
      <Image className='circular-cat m-4' src={salud} height={100} width={100} alt='' />
      <p className='text-white mt-4'>
        En vuelca nos interesa que puedas tener todas las comodidades de la vida urbana de una forma responsable y consciente con el medio ambiente,
        para esto te ofrecemos distintas alternativas para que puedas migrar a un estilo de vida sustentable para ti y las futuras generaciones
      </p>
      <ul className='cat-children-in'>
        {Object.keys(subcategorias).map((key) => (          
          <li key={key} className='text-center'>
            <Link href={subcategorias[key].link}>
                <Image className='circular-cat m-4' src={subcategorias[key].imgurl} height={50} width={50} alt='' />
                <h2>{subcategorias[key].nombre}</h2>
                <p>{subcategorias[key].descripcion}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
