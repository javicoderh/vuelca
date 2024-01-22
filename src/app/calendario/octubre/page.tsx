

import { OctubreEventosList } from '@/app/ui/octubre/octubreeventosList'
import '../../globals.css'

async function Octubre() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos octubre 2024</h1>
        <OctubreEventosList />         
    </div>
    )
}

export default Octubre