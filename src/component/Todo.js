import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo,ToggleTodo,update } from '../Redux/TodoSlice'
const Todo = ({todo}) => {
 let dispatch=useDispatch()
 const [isEdited,setIsEdited]=useState(false)
 const [newtask,setNewtask]=useState('')
 const updated=()=>{
  setIsEdited (!isEdited)
  setNewtask(todo.task)
  isEdited && dispatch(update({id:todo.id,task:newtask}))
 }
  return (
    <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
     {isEdited?<input type='text' value={newtask} onChange={(e)=>setNewtask(e.target.value)}/> : <h2 style={{width:'300px',color:(todo.isDone)?'green':'red'}}>
        {todo.task}
      </h2> }
      {(todo.task!=='')? <>
      <Button onClick={()=>dispatch(deleteTodo(todo.id))}style={{height:'40px'}} variant="danger">DELETE</Button>
      <Button onClick={()=>dispatch(ToggleTodo(todo.id))} style={{height:'40px'}}variant={(todo.isDone)?"success":'danger'}>{ (todo.isDone) ?'DONE':'UNDONE' }</Button>
      <Button onClick={updated} style={{height:'40px'}}variant="info">UPDATE</Button>
      </> : ''}
     
    </div>
  )
}

export default Todo
