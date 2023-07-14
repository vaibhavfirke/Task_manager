"use client";
import Task from "./task";
import { observer } from "mobx-react-lite";
import todosStore, { ITodoModel } from "../models/todoStore";
import React, {  useState } from "react";
import dynamic from "next/dynamic";

const Add = dynamic(() => import("./modalAdd"));
const Edit = dynamic(() => import("./modalEdit"));

const TextContent: React.FC = () => {
  // console.log("data",todosStore.todosList)
  const [add, setAdd] = useState(false);
  const [edit,setEdit]=useState(false);
 
  const toggleAdd = () => {
    setAdd(!add);
  };
  const toggleEdit=()=>{
    setEdit(!edit);
  }
 
  return (
    <div id="home" className="scroll-mt-14">
      <div className="flex sm:flex-col flex-row justify-between gap-2.5 w-5/6 sm:w-full box-border p-4  font-sans m-auto ">
        {add ? <Add func={toggleAdd} /> : null}
        {edit ? <Edit func={toggleEdit}/>:null}
        <div
          id="Todo"
          className="scroll-mt-12 w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5"
        >
          <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-red-500 border-t-8">
            <h1 className="text-center text-red-500 ">TODO</h1>
          </div>

          <div
            onClick={toggleAdd}
            className="bg-white rounded-lg cursor-crosshair m-auto mt-2 box-border p-2 w-full mb-4 text-slate-950 font-bold text-lg border-2 shadow-lg hover:shadow-red-500/50"
          >
            <h1 className="text-center pointer-events-auto text-sm">
              + ADD TODO
            </h1>
          </div>
          <div className="overflow-hidden hover:overflow-y-scroll h-screen">
            {todosStore.todosList.filter((el) => el.status == "Todo").map((item) => (
              <Task
                key={item.id}
                id={item.id}
                title={item.title}
                discription={item.discription}
                status={item.status}
                color={"#ef4444"}
                func={toggleEdit}
              />
            ))}
          </div>
        </div>
        <div
          id="Progress"
          className="scroll-mt-12 w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5"
        >
          <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-yellow-500 border-t-8">
            <h1 className="text-center text-yellow-500">PROGRESS</h1>
          </div>
          <div
            onClick={toggleAdd}
            className="bg-white rounded-lg cursor-crosshair m-auto mt-2 box-border p-2 w-full mb-4 text-slate-950 font-bold text-lg border-2 shadow-lg hover:shadow-yellow-500/50"
          >
            <h1 className="text-center pointer-events-auto text-sm">
              + ADD TODO
            </h1>
          </div>

          <div className="overflow-hidden hover:overflow-y-scroll h-screen">
            {todosStore.todosList.filter((el) => el.status == "Progress").map((item) => (
              <Task
                key={item.id}
                id={item.id}
                title={item.title}
                discription={item.discription}
                status={item.status}
                color={"#eab308"}
                func={toggleEdit}
              />
            ))}
          </div>
        </div>
        <div
          id="Complited"
          className="scroll-mt-12 w-full h-full bg-slate-200 box-border p-4 rounded-xl mr-5"
        >
          <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg border-t-green-500 border-t-8">
            <h1 className="text-center text-green-500">COMPLITED</h1>
          </div>
          <div
            onClick={toggleAdd}
            className="bg-white rounded-lg cursor-crosshair m-auto mt-2 box-border p-2 w-full mb-4 text-slate-950 font-bold text-lg border-2 shadow-lg hover:shadow-green-500/50"
          >
            <h1 className="text-center pointer-events-auto text-sm">
               + ADD TODO
            </h1>
          </div>

          <div className="overflow-hidden hover:overflow-y-scroll h-screen">
            {todosStore.todosList.filter((el) => el.status == "Complited").map((item) => (
              <Task
                key={item.id}
                id={item.id}
                title={item.title}
                discription={item.discription}
                status={item.status}
                color={"#22c55e"}
                func={toggleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(TextContent);
