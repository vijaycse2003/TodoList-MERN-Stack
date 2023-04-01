import React,{useState} from 'react'
import axios from 'axios'
import './Addtask.css'

export default function Addtask(props) {
    const [task,setTask]=useState('')
    const Addtask=()=>{
        if(task.trim() === ''){
            return
        }
        else{
                   axios.post('http://localhost:8000/',{
                       todo:task,
                       isComplete :false
                   }).then(res=>{
                       setTask('')
                       props.Addtask(res.data)
                   }).catch(err=>console.log(err))
        }
    }
  return (
    <div className='addtask'>
        <input type='text' placeholder='Add Task ...' name='text' value={task} onChange={e=>setTask(e.target.value)}/>
        <button onClick={()=>Addtask()}>Add Task</button>
    </div>
  )
}
