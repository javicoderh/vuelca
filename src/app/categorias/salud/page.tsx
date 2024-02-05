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
    Biocosmetica: {
      nombre: 'Biocosmetica',
      descripcion: 'Productos naturales para el cuidado de tu salud.',
      imgurl: salud,
      link: 'categorias/salud/Biocosmetica'
    },
    Terapeutas: {
      nombre: 'Terapeutas',
      descripcion: 'Maso, flores de Bach, TethaHealing, Quiropraxia, Reiki, etc...',
      imgurl: salud,
      link: 'categorias/salud/Terapeutas'
    },
    Yoga: {
      nombre: 'Yoga',
      descripcion: 'integra y perfecciona la sabiduría de este arte milenario.',
      imgurl: salud,
      link: 'categorias/salud/Yoga'
    },
    Ayurveda: {
      nombre: 'Ayurveda',
      descripcion: 'Comprensión y tecnicas de medicina india.',
      imgurl: salud,
      link: 'categorias/salud/Ayurveda'
    },
    'Limpieza del Hogar': {
      nombre: 'Limpieza del Hogar',
      descripcion: 'Productos Biodegradables y saludables para la mantención de tu hogar.',
      imgurl: salud,
      link: 'categorias/salud/Limpieza-del-Hogar'
    },
    'Tarot y otras magias': {
      nombre: 'Tarot y otras magias',
      descripcion: 'Numerología, Quiromancia, registros akashikos y mas.',
      imgurl: salud,
      link: 'categorias/salud/Tarot-y-otras-magias'
    },
    'Medicina China': {
      nombre: 'Medicina China',
      descripcion: 'Profesionales de la medicina holistica oriental.',
      imgurl: salud,
      link: 'categorias/salud/Medicina-China'
    },
    'Astrología': {
      nombre: 'Astrología',
      descripcion: 'Aprende como la danza planetaria afecta nuestro ser.',
      imgurl: salud,
      link: 'categorias/salud/Astrologia'
    }
  };

  return (    
    <div className='w-full categoria-container flex flex-col items-center justify-center p-2'>
      <h1 className='text-white'>Salud</h1>
      <Image className='circular-cat m-4' src={salud} height={100} width={100} alt='' />
      <p className='text-white mt-4'>
        En vuelca entendemos la salud desde una perspectiva integrativa que considera tanto el bienestar físico de la persona
        como su bienestar emocional y social.
        <br />
        Los emprendimientos que recomendamos son terapeutas complementarios y/o practicantes de diversas disciplinas
        que sin reemplazar a la medicina convencional están pensadas para mejorar la calidad de vida en varios aspectos.
      </p>

      <h2>Subcategorias Salud:</h2>
      <ul className='cat-children'>
        {Object.keys(subcategorias).map((key) => (
          
        <Link
        href={subcategorias[key].link}
        >
          <li key={key} className='text-center'>
            <Image className='circular-cat m-4' src={subcategorias[key].imgurl} height={50} width={50} alt='' />
            <h2>{subcategorias[key].nombre}</h2>
            <p>{subcategorias[key].descripcion}</p>
          </li>
        </Link>
        ))}
      </ul>
    </div>
  );
}
