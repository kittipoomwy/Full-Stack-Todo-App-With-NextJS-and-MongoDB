import React from 'react'
import { todoProps } from '@/app/src/types'
import ChangeTodo from '@/app/src/component/todos/ChangeTodo'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

function Todo({todo} : { todo: todoProps }) {

  const todoStyle = {
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    opacity: todo.isCompleted ? 0.5 : 1
  };

  return (
    <div style={todoStyle} className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
        <ChangeTodo todo={todo} />
        <span className='text-center font-bold uppercase grow'>{todo.title}</span>
        <div className='flex items-center mx-2'>
          <EditTodo todo={todo} />
        </div>
        
        <div className='flex items-center mx-2'>
          <DeleteTodo todo={todo} />
        </div>
        
    </div>
  )
}

export default Todo