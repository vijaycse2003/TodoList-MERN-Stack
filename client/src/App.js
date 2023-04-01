import React,{useState,useEffect} from 'react'
import Addtask from './Components/Addtask'
import TodoList  from './Components/Todolist'
import axios from 'axios'
import './App.css'
import UpdateTask from './Components/Updatetask'

const App = () => {
  const[Todolist,setTodolist]=useState([])
  const[tasktoupdate,setTasktoupdate]=useState({})
  const[showpopup,setShowpopup]=useState(false)

  useEffect(()=>{
    axios.get('http://localhost:8000/')
    .then(res=>setTodolist(res.data)
    .catch(err=>console.log(err)))
  },[])

  const addTask=newTask=>{
    setTodolist([...Todolist,newTask])
  }

  const taskComplete=task=>{
    const newList=[...Todolist]
    newList.forEach(item=>{
      if(item._id === task._id){
        item.isComplete =task.isComplete
      }
    })
  }
  const removeTask=task=>{
     const newList=Todolist.filter(item=>!(item._id === task._id))
     setTodolist(newList)
  }
  const Updatetask=task=>{
      const newList=[...TodoList]
      newList.forEach(item=>{
        if(item._id === task._id){
          item.todo = task.todo
        }
      })
      setTodolist(newList)
  }
  return (
    <div>
      <Addtask Addtask={addTask}/>
      <TodoList todolist={Todolist} taskcomplete={taskComplete} removetask={removeTask} tasktoupdate={task=>setTasktoupdate(task)} showpopup={()=>setShowpopup(!showpopup)}/>

      {showpopup && <UpdateTask  task={tasktoupdate}  updateTask={Updatetask} removePopup={()=>setShowpopup(!showpopup)} />}
    </div>
  )
}

export default App
