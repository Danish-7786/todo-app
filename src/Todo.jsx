import React from 'react'

function Todo({todo,toggleTodo,deleteTodo}) {
  return (
    <div className='bg-yellow-200'>
      <li 
              key={todo.id} 
              className="flex items-center justify-between p-2 border-b"
            >
              <span 
                onClick={() => toggleTodo(todo.id)}
                className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                Delete
              </button>
            </li>
    </div>
  )
}

export default Todo