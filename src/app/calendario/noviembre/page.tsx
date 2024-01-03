import Link from "next/link"

export default function Noviembre() {

    let back = '/calendario'

    return (
        <div>
        <h1 className="text-white">Soy noviembre</h1>
        <Link href={back}>
                <button>atras</button>
            </Link>
            </div>
    )
}