import React from 'react'
import Todo from './Todo'

const TodoList = ({todo}) => {
  return (
    <div>
      {todo.map(el=> <Todo  todo={el} key={el.id}/>)}
    </div>
  )
}

export default TodoList
