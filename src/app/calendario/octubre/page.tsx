import Link from "next/link"

export default function Octubre() {

    let back = '/calendario'

    return (
        <div>
        <h1 className="text-white">Soy octubre</h1>
        <Link href={back}>
                <button>atras</button>
            </Link>
            </div>
    )
}