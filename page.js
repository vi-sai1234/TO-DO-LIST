"use client";
import Todo from "../app/todo/page";
import {useState,useEffect} from "react";
export default function Home() {

  const [Tasks, setTasks] = useState("");  // user enter input fields
  const [store, setstore] = useState([]); // to store as list of todos
  

  useEffect(() => {
    const data = localStorage.getItem("store");
    if (data) {
      setstore(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);
  
    const add=(e)=>{
        e.preventDefault();
        const temp=[...store,Tasks];
        setstore(temp);
        setTasks("");
    }

    const deleteTask = (ID) => {
      const filter= store.filter((item, i) => i !== ID);
      setstore(filter);
    }

  
    

    
 return (
 <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
 <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
   <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
   <form className="flex gap-3 mb-4" onSubmit={add}>
     <input
       type="text"
       placeholder="Add a new todo"
       className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
       value={Tasks} onChange={(e) => setTasks(e.target.value)}
       
     />
     <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" >
        Add
     </button>
   </form>
   <Todo store={store} deleteTask={deleteTask} />
   </div>

</div>
);
}
