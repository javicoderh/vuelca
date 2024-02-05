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
    Ecoaldeas: {
      nombre: 'Ecoaldeas y Ecobarrios',
      descripcion: 'espacios diseñados para el cuidado de la vida.',
      imgurl: salud,
      link: 'categorias/redes/ecoaldeas'
    },
    Fundaciones: {
      nombre: 'Fundaciones',
      descripcion: 'instituciones dedicadas al cuidado de la vida de animales, personas y medio ambiente',
      imgurl: salud,
      link: 'categorias/redes/fundaciones'
    },
    Movimientos: {
      nombre: 'Moviemientos y agrupaciones',
      descripcion: 'grupos dedicados a coordinar acción concreta en pro del medio ambiente y las personas',
      imgurl: salud,
      link: 'categorias/redes/movimientos'
    },
    Cooperativas: {
      nombre: 'Cooperativas y otros comercios',
      descripcion: 'nuevas economías y mercancías sustentables',
      imgurl: salud,
      link: 'categorias/permacultura/aguas'
    },
  };

  return (    
    <div className='w-full categoria-container flex flex-col items-center justify-center p-2'>
      <h1 className='text-white'>Redes y comunidad</h1>
      <Image className='circular-cat m-4' src={salud} height={100} width={100} alt='' />
      <p className='text-white mt-6 mb-8'>
        Cuidar el medio ambiente y volcarnos hacia una mentalidad sustentable es una gran tarea, es por eso que vuelca propone crear una fuerza
        conjunta de personas, emprendimientos y grupos que compartan esta visión haciendo mas facil coordinar un trabajo articulado.
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
