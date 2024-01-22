
import { FebreroEventosList } from '@/app/ui/febrero/febreroeventosList';
import '../../globals.css'
import { EneroEventosList } from "@/app/ui/enero/eneroeventosList"


async function Febrero() {

    let back = '/calendario'

    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos febrero 2024</h1>
        <FebreroEventosList />       
    </div>
    )
}

export default Febrero;