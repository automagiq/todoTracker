import React, { useState } from 'react';
import TodoList from './TodoList'
import TodoController from './TodoController'
import logo from './logo.svg';
import './App.css';




function App() {

  const [list, setList] = useState(
    [
      { id: 1, title: "Object One", done: false },
      { id: 2, title: "Object Two", done: false },
      { id: 3, title: "Object Three", done: false }

    ])
  const addNewTodo = (newTitle) => {
    const newTodo = { id: Math.random(), title: newTitle, done: false }
    const newList = [...list, newTodo]
    setList(newList)
  }

  const deleteTodo = (id) => {
    const newList = [...list].filter(el => el.id !== id)
    setList(newList)
  }

  return (
    <div >

      <TodoController addNewTodo={addNewTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} />



    </div>
  );
}

export default App;
