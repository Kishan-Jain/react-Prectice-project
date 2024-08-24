import { createContext, useContext } from "react"

export const TodoContext = createContext({
  todos : [ ],
  addTodo : (todo) => {},
  updateTodo : (id, todo) => {},
  removeTodo : (id) => {},
  markToComplete : (id) => {}
})


export const UseTodo = () => {
  return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider
