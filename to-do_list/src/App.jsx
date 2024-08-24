import "./App.css";
import { TodoProvider } from "./contextApi/Todo";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";
import TodoItems from "./components/TodoItems";
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [todo , ...prev])
  }
  const updateTodo = (id, newTodo) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? newTodo : prevTodo))
  }
  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  const markToComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todolist = JSON.parse(localStorage.getItem("todos"))
    if(todolist && todolist.langth > 0){
      setTodos(todolist)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, removeTodo, markToComplete }}>
      <h1 className="font-mono font-extrabold text-center text-5xl bg-blue-300 p-5 shadow-xl shadow-blue-100 text-blue-700">
        TO-DO List
      </h1>
      <div className="bg-blue-100 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-400 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4 bg-white rounded-lg text-black">
            {/* Todo form goes here */}
            < TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            { todos.map(todo => (
              <div key={todo.id} className="w-full">
                < TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
