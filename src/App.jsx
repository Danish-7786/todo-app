import React, { useState } from 'react';
import Todo from './Todo';
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        completed: false 
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        
        <div className="flex mb-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border rounded-l-md"
            placeholder="Enter a new todo"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button 
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map(todo => (
            
            <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;