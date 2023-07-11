
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Task(){
    return (
        <div className="w-full border-t-4  bg-white box-border p-4 font-sans rounded-xl shadow-xl mb-4">
         <div className="w-4 h-4 rounded-full bg-red-600 mb-4"></div>
         <h1 className="mb-4 text-slate-950 font-bold text-lg">Lorem ipsum dolor sit amet consectetu</h1>
         <p className="text-slate-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum consequuntur optio labore perferendis placeat fugit sed,   </p>
         <div className="flex justify-between w-full mt-4"> 
         <button className="block w-5 h-5"><FontAwesomeIcon icon={faPenToSquare} /></button>
         <button className="block w-5 h-5"><FontAwesomeIcon icon={faTrash} /></button>
         </div>
    
        </div>
    )
}