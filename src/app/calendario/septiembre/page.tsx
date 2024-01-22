
import { SeptiembreEventosList } from '@/app/ui/septiembre/septiembreeventosList'
import '../../globals.css'


async function Septiembre() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos septiembre 2024</h1>
        <SeptiembreEventosList />        
    </div>
    )
}

export default Septiembre