
import { NoviembreEventosList } from '@/app/ui/noviembre/noviembreeventosList'
import '../../globals.css'


async function Noviembre() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">eventos noviembre 2024</h1>
        <NoviembreEventosList />        
    </div>
    )
}

export default Noviembre