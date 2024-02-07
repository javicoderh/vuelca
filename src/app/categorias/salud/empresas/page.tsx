
import '../../../globals.css'
import { SaludEmpresasForm } from './empresasForm'


async function Agosto() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">Empresas Salud 2024</h1>
        <SaludEmpresasForm />    
    </div>
    )
}

export default Agosto