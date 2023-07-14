"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import { observer } from "mobx-react-lite";
import todosStore, { ITodoModel } from "../models/todoStore";

interface ItemProps {
    id: number;
    title: string;
    discription:string;
    status:string;
    key:number;
    color:string;
  }
const Task: React.FC<ItemProps> = ({id,title,discription,status,color}) =>{
    const customStyle = {
        backgroundColor: color,
      };
    const handleDelete=()=>{
       todosStore.deleteTodo(id);
       alert(`Todo Deleted with Id: ${id}!`)
    }


    return (
        <div className="w-full bg-white box-border p-4 font-sans rounded-xl shadow-xl mb-4 hover:border-s-green-500 hover:border-s-4">
         <div className="w-4 h-4 rounded-full mb-4" style={customStyle}></div>
         <h1 className="mb-4 text-slate-950 font-bold text-lg">{title}</h1>
         <p className="text-slate-600 ">{discription}</p>
         <div className="flex justify-between w-full mt-4"> 
         <button className="block w-5 h-5"><FontAwesomeIcon icon={faPenToSquare} /></button>
         <button className="block w-5 h-5" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
         </div>
    
        </div>
    )
}

export default observer(Task);