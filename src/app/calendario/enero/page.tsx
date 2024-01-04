import { fetchEnero } from "@/app/lib/data"
import Link from "next/link"
import Image from "next/image"
import calendario from '../../../../public/timetable.svg'

async function Enero() {

    let back = '/calendario'
    const eventos = await fetchEnero()
    
    
    return (
        <div>
        <h1 className="text-white">eventos enero 2024:</h1>
        <ul className="mensuales-container">
        {eventos.map((evento: any) => (
          <Link key={evento.nombre} href={'/'+evento.nombre}>
            <li>
                <h2 className='p-[3px]'>{evento.nombre}:</h2>
                <div className='flex flex-row'>
                    <h3 className='pl-[6px]'>{evento.mes} - {evento.fecha}</h3>
                    <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
                </div>                        
                <p className="text-white">{evento.descripcion}</p>
            </li>
          </Link>
        ))}
        </ul>
        <Link href={back}>
                <button className="text-white">atras</button>
            </Link>
            </div>
    )
}

export default Enero;