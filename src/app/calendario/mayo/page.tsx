import Link from "next/link"

export default function Mayo() {

    let back = '/calendario'

    return (
        <div>
        <h1 className="text-white">Soy mayo</h1>
        <Link href={back}>
                <button className="text-white">atras</button>
            </Link>
            </div>
    )
}