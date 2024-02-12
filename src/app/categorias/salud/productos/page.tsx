import '../../../globals.css'
import { SaludProductosForm } from './productosform'


async function ProductosForm() {

    let back = '/calendario'
    
    
    return (
    <div className="inner-eventos-container enero-bg">
        <h1 className="mb-[20px] inner-eventos-tit">Empresas Salud 2024</h1>
        <SaludProductosForm />    
    </div>
    )
}

export default ProductosForm