
import { JunioEventosList } from '@/app/ui/junio/junioeventosList';
import '../../globals.css'


async function Junio() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos junio 2024</h1>
        <JunioEventosList />        
    </div>
    )
}

export default Junio;