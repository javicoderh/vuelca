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
      nombre: 'proveedores',
      descripcion: 'huertas orgánicas, bosques y productos orgánicos para tus cultivos',
      imgurl: salud,
      link: 'categorias/permacultura/Bioconstruccion'
    },
    Agroecologia: {
      nombre: 'Articulos sobre nutrición',
      descripcion: 'huertas orgánicas, bosques y productos orgánicos para tus cultivos',
      imgurl: salud,
      link: 'categorias/permacultura/agroecologia'
    }    
    }

  return (    
    <div className='w-full categoria-container flex flex-col items-center justify-center p-2'>
      <h1 className='text-white'>Alimentación</h1>
      <Image className='circular-cat m-4' src={salud} height={100} width={100} alt='' />
      <p className='text-white mt-4'>
        En vuelca nos interesa que aprendas como alimentarte saludablemente y tengas proveedores con productos de primer nivel <br />
        frutas, veduras y legumbres orgánicas cultivadas de manera responsable con el medio ambiente y la salud de las personas <br />
        sin pesticidas ni productos quimicos que puedan alterar tu organismo.
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
