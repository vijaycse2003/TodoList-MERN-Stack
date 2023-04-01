import React from 'react'
import axios from 'axios'
import './Todolist.css'

export default function Todolist(props) {

    const Todo=props.todolist.map((task,index)=>{

       const taskcomplete=task=>{
           axios.put(`http://localhost:8000/${task._id}`,{
               _id:task._id,
               todo:task.todo,
               isComplete:!task.isComplete
           }).then(res=>{
               props.taskcomplete(res.data)
           }).catch(err=>console.log(err))
       }

       const removeTask=id=>{
           axios.delete(`http://localhost:8000/${id}`).then(res=>
               props.removetask(res.data)
           ).catch(err=>console.log(err))
       }

        return <li key={index}>


           <div style={{display:'flex'}}> 
           <i className={task.isComplete ?'isComplete':'fa fa-check'}></i>
           <p className={task.isComplete ?'taskComplete':''} onClick={()=>{
               taskcomplete(task)
           }}>{task.todo}</p>
           </div>


           <div>
           <i className='fa fa-edit' onClick={()=>{
               props.showpopup()
               props.tasktoupdate(task)
           }}></i>
           <i className='fa fa-close' onClick={()=>{
               removeTask(task._id)
           }}></i>
           
           </div>
        </li>
    })
  return (
    <div className='tasklist'>

    <ul>
        {Todo}
    </ul>
    </div>
  )
}
