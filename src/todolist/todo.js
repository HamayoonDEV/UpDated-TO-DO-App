import { useState } from "react";
import React from "react";
import "./index.css"

let globalID = 0
function App(){
    const [todos,settodos] = useState([])
    const [task,settask] = useState("")

    function add(event){
        event.preventDefault()
        settodos(oldToDos=>{
            settask('')
            return [...oldToDos,{todo:task,id:globalID++}]
        })
    }
    function deleteItem(itmeID){
        settodos(oldToDos=>oldToDos.filter(item=>item.id !==itmeID))
    }
    return <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={add} >
        <input  type = "text" value={task} onChange = {e=>{
            settask(e.target.value)
        }} />
        <button type="submit" >ADD</button>
        </form>
                <ul>  
            {todos.map((item)=>{
               return <div key={item.id}>
               <li>{item.todo}</li>
               <button onClick={()=> deleteItem(item.id)} >Delete</button>
               </div>
            })}

        </ul>

    </div>
}

export default App