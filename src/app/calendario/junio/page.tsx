import Link from "next/link"

export default function Junio() {

    let back = '/calendario'

    return (
        <div>
        <h1 className="text-white">Soy junio</h1>
        <Link href={back}>
                <button className="text-white">atras</button>
            </Link>
            </div>
    )
}