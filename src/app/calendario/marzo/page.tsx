import Link from "next/link"

export default function Marzo() {

    let back = '/calendario'

    return (
        <div>
        <h1 className="text-white">Soy marzo</h1>
        <Link href={back}>
                <button>atras</button>
            </Link>
            </div>
    )
}