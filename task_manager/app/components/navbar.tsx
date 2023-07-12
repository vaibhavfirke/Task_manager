import logo from "../images/Logo.png"
import Image from 'next/image';
export default function Navbar(){
    return (
        <nav className="w-full h-14  border-2 flex justify-around items-center fixed bg-white">
            {/* <Image className="h-13 ml-4  object-cover" src={logo} alt="Logo" /> */}
            <h1 className="font-bold sm:text-lg text-sm">TASK <span className="text-yellow-500">MANAGEMENT</span></h1>
        </nav>
    )
}