import Link from "next/link"

export default function Enero() {

    let back = '/calendario'

    return (
        <div>
            <h1 className="text-white">Soy enero</h1>
            <Link href={back}>
                <button className="text-white">atras</button>
            </Link>
        </div>
    )
}