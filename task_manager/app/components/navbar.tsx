import logo from "../images/Logo.png"
import Image from 'next/image';
export default function Navbar(){
    return (
        <nav className="w-full h-14  border-2 flex justify-around items-center fixed bg-white">
            {/* <Image className="h-13 ml-4  object-cover" src={logo} alt="Logo" /> */}
            <a href="#home">
            <h1 className="font-bold text-lg sm:text-sm">TASK <span className="text-yellow-500">MANAGEMENT</span></h1>

            </a>
           <div className="hidden sm:inline">

            <div className="flex gap-4 text-sm ">
                <strong><a href="#Todo">Todo</a> </strong>
                <strong><a href="#Progress">Progress</a></strong>
                <strong><a href="#Complited">Complited</a></strong>
           </div>
            </div>
        </nav>
    )
}