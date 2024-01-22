
import { MayoEventosList } from '@/app/ui/mayo/mayoeventosList'
import '../../globals.css'
async function Marzo() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos mayo 2024</h1>
        <MayoEventosList />       
    </div>
    )
}

export default Marzo