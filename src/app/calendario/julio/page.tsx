import { fetchJulio } from "@/app/lib/data"
import Link from "next/link"
import Image from "next/image"
import calendario from '../../../../public/timetable.svg'
import '../../globals.css'

async function Enero() {

    let back = '/calendario'
    const eventos = await fetchJulio()
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos enero 2024:</h1>
        <ul className="mensuales-container inner-proximos-eventos-ul">
            {eventos.map((evento: any) => (
            <Link key={evento.nombre} href={'/'+evento.nombre}>
            <li className="maxw">
                <h2 className='p-[3px] maxh2'>{evento.nombre}:</h2>
                <div className='flex flex-row'>
                    <h3 className='pl-[6px] maxh3'>{evento.mes} - {evento.fecha}</h3>
                    <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
                </div>                        
                <p className="text-white maxp">{evento.descripcion}</p>
            </li>
            </Link>
            ))}
            <Link href={back}>
                <button className="boton-calendario mt-[20px]">atras</button>
            </Link>
        </ul>
    </div>
    )
}

export default Enero;