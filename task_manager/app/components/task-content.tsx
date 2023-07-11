
import Task from "./task"
export default function TextContent(){
    return (
        <div className="w-5/6 box-border p-4 flex justify-between font-sans m-auto mt-4 md:flex-row">
            <div className="w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5">
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg ">
                <h1 className="text-center text-red-500">TODO</h1>
                </div>
                
               
                <div className="overflow-hidden hover:overflow-y-scroll h-screen">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                </div>
                
            </div>
            <div className="w-full h-50 bg-slate-200 box-border p-4 rounded-xl mr-5">
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg ">
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
                <div className="bg-white w-full box-border p-2 mb-4 text-slate-950 font-bold text-lg ">
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
    )
}