import { AgostoEventosList } from '@/app/ui/agosto/agostoeventosList'
import '../../globals.css'


async function Agosto() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos agosto 2024</h1>
        <AgostoEventosList />    
    </div>
    )
}

export default Agosto