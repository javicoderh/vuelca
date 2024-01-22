
import { JulioEventosList } from '@/app/ui/julio/JulioeventosList'
import '../../globals.css'


async function Julio() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos julio 2024</h1>
        <JulioEventosList />      
    </div>
    )
}

export default Julio