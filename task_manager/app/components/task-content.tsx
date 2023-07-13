'use client'
import Task from "./task";
import { observer } from "mobx-react-lite";
import todosStore, { ITodoModel } from "../models/todoStore";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Add = dynamic(() => import("./modalAdd"));

const TextContent: React.FC = () => {
    // console.log("data",todosStore.todosList)
    const [add,setAdd]=useState(false)
const toggleAdd=()=>{
    setAdd(!add)
    console.log(add);
}


    return (
        <div>
            <div onClick={toggleAdd} className="bg-white m-auto box-border p-2 w-5/6 mb-4 text-slate-950 font-bold text-lg border-y-red-500 border-t-8">
                <h1 className="text-center pointer-events-auto ">ADD TODO</h1>
                </div>
        <div className="flex sm:flex-col flex-row justify-between gap-2.5  w-5/6 box-border p-4  font-sans m-auto ">
            {add?<Add func={toggleAdd}/>:null}
            <div className="w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5">
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-red-500 border-t-8">
                <h1 className="text-center text-red-500 ">TODO</h1>
                </div>
                
               
                <div className="overflow-hidden hover:overflow-y-scroll h-screen">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                </div>
                
            </div>
            <div className="w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5" >
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-yellow-500 border-t-8">
                <h1 className="text-center text-yellow-500">PROGRESS</h1>
                </div>
                
               
                <div className="overflow-hidden hover:overflow-y-scroll h-screen">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                </div>
                
            </div>
            <div className="w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5">
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-green-500 border-t-8">
                <h1 className="text-center text-green-500">COMPLITED</h1>
                </div>
                
               
                <div className="overflow-hidden hover:overflow-y-scroll h-screen">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                </div>
                
            </div>
        </div>
        </div> 
    )
}
export default TextContent;