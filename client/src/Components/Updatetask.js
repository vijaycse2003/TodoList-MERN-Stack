import React, { useState } from 'react'
import axios from 'axios'
import './Updatetask.css'

export default function Updatetask(props){
    const updateTask=()=>{
        if(task.trim() === '' || props.task.todo === task){
            return
        }
        else{
            axios.put(`http://localhost:8000/${props.task._id}`,{
                _id:props.task._id,
                todo:task,
                isComplete:props.task.isComplete
            })
            .then(res=>{props.removePopup()
                          props.updateTask(res.data)
                        })
            .catch(err=>{console.log(err)})
        }
    }
    const[task,setTask]=useState(props.task.todo)
  return (
    <div className='popup'>
        <div className='popup-content'>

<input type='text' placeholder='Update Task ....' value={task} onChange={e=>setTask(e.target.value)}/>
<button onClick={()=>updateTask()}>Update</button>

        </div>
    </div>
  )
}
