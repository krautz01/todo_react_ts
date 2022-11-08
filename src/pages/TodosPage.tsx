import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces';

export const TodosPage: React.FunctionComponent = () => {
  
const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Are you sure you want to delete the item ?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return (
    <React.Fragment>
        <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  )
}
