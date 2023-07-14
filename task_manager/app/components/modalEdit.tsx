'use client'

import { observer } from "mobx-react-lite";
import todosStore, { ITodoModel } from "../models/todoStore";
import React  from "react";
type AddProps = {
  func: () => void;
  
};

const Edit: React.FC<AddProps> = ({ func }) => {
    
    const handleUpdate=()=>{
       if(todosStore.todo.discription==""||todosStore.todo.status==""||todosStore.todo.title==""){
        alert("Enter All The Detail's !")
       }else{
        todosStore.updateTodo();
        setTimeout(()=>{
          func()
        },100)
       }

      
    }
    return (
        <div  className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div className="relative transform mb-36 w-2/5 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-5/6 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
          <div className="sm:flex sm:items-start w-full">
            
            <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Update Task</h3>
              <div className="mt-2 w-full m-auto flex flex-col gap-6 ">

                <input value={todosStore.todo.title} onChange={(e)=>todosStore.todo.title=e.target.value} type="text" placeholder="Title" className="h-10 w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                <textarea value={todosStore.todo.discription} onChange={(e)=>todosStore.todo.discription=e.target.value} placeholder="Description" className="h-40 w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" ></textarea>
                <select value={todosStore.todo.status} onChange={(e)=>todosStore.todo.status=e.target.value} name="" id="" className="h-10 w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                  <option value="">Select Status</option>
                  <option value="Todo">Todo</option>
                  <option value="Progress">Progress...</option>
                  <option value="Complited">Complited</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={handleUpdate} type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">UPDATE</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>func()}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default observer(Edit); 