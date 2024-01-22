
import { DiciembreEventosList } from '@/app/ui/diciembre/diciembreeventosList'
import '../../globals.css'


async function Diciembre() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos marzo 2024</h1>
        <DiciembreEventosList />         
    </div>
    )
}

export default Diciembre