
import { AbrilEventosList } from '@/app/ui/abril/abrileventosList'
import '../../globals.css'
import { MarzoEventosList } from "@/app/ui/marzo/marzoeventosList"

async function Abril() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos abril 2024</h1>
        <AbrilEventosList />          
    </div>
    )
}

export default Abril;