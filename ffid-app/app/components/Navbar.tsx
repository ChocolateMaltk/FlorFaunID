import Link from "next/link"
import { FaDog, FaTree} from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Home</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenlyy align-middle gap-4 text-white text-4xl lg:text-4xl">
                    <Link className="text-white/80 hover:text-white no-underline" href="/">
                        About Us
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="/">
                        <FaDog />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="/">
                        <FaTree />
                    </Link>
                </div>
            </div>
        </nav>
    )
}