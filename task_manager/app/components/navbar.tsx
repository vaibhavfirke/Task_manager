import logo from "../images/Logo.png"
import Image from 'next/image';
export default function Navbar(){
    return (
        <nav className="w-full h-14  border-2 flex justify-items-center">
            <Image className="h-13 ml-8  object-cover" src={logo} alt="Logo" />
        </nav>
    )
}