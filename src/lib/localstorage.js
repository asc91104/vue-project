const STORAGE_NAME = "todoList"

const getTodoList = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveTodoList  = (todoList) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todoList))
}

const getTodo = (todoName) => {
  const todoList = getTodoList()
  return todoList.find((todo) => todo.name == todoName)
}

export { getTodoList, saveTodoList, getTodo }