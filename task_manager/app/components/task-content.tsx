
import Task from "./task"
export default function TextContent(){
    return (
        <div className="flex flex-col md:flex-row justify-between gap-2.5  w-5/6 box-border p-4  font-sans m-auto ">
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
    )
}