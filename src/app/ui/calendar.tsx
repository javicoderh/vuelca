import calendario from '../../../public/timetable.svg'
import '../globals.css'
import Link from 'next/link';
import Image from 'next/image';



const Calendario: React.FC = () => {  

let hrefCalendario = '/calendario'

  return (
    <Link
    href={hrefCalendario}
    >
        <Image 
        className="calendario hidden md:flex"
        width="125"
        height="100"
        src={calendario}
        alt="calendario"
        />
    </Link>
  );
};

export default Calendario;
