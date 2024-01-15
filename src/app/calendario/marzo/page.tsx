
import '../../globals.css'
import { MarzoEventosList } from "@/app/ui/marzo/marzoeventosList"

async function Marzo() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos marzo 2024:</h1>
        <MarzoEventosList />          
    </div>
    )
}

export default Marzo