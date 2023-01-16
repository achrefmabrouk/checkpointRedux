import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddTodo} from '../Redux/TodoSlice'

const AddTodos = () => {
    let [todos,setTodos]=useState('')
    let dispatch = useDispatch()
  return (
    <div>
        <Form style={{display:'flex',justifyContent:'center',gap:'20px'}}>
       <Form.Group className="mb-3" controlId="text">
        <Form.Control value={todos} onChange={(e)=>setTodos(e.target.value)} style={{width:'200px'}} type="text" placeholder="Enter Task" />
      </Form.Group>
      <Button onClick={()=>dispatch(AddTodo({id:Math.random(),task:todos,isDone:false}),setTodos(''))} style={{height:'40px'}} variant="primary">ADD</Button>
     
      </Form>
      
    </div>
  )
}

export default AddTodos
