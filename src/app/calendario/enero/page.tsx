import '../../globals.css'
import { EneroEventosList } from "@/app/ui/enero/eneroeventosList"


async function Enero() {

    let back = '/calendario'

    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos marzo 2024:</h1>
        <EneroEventosList />          
    </div>
    )
}

export default Enero;