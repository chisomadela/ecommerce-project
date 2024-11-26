import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <ul className="flex flex-row justify-between items-center gap-[4vw] bg-blue-700 text-white h-28 font-bold capitalize px-4">
                <Link href="/">
                <li>Home</li>
                </Link>

                <Link href="/about">
                <li><a className = "hover:text-gray-500">about</a></li>
                </Link>

                <Link href="/contact">
                <li><a className = "hover: text-gray-500">Contact</a></li>
                </Link>

                <Link href="/signup">
                <li><a className = "hover: text-gray-500">Signup</a></li>
                </Link>

                <Link href="/dashboard">
                <li><a className = "hover: text-gray-500">Dashboard</a></li>
                </Link>
                
                <Link href="/shop">
                <li><a className = "hover: text-gray-500">shop</a></li>
                </Link>


            </ul>
        </nav>
    )
}