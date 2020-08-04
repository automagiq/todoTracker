import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoCreateForm from './TodoCreateForm';



const initialList = [
  { id: 1, title: "First ToDo", done: false, },
  { id: 2, title: "Second ToDo", done: false, },
  { id: 3, title: "Third ToDo", done: false, }
];

function App() {


  const [list, setList] = useState(initialList) //

  const create = title => {
    console.log(title);
    const newItem = {
      id: Math.random() * 10,
      title,
      done: false

    }

    const updatedList = [...list, newItem];

    setList(updatedList);
  }

  return (
    <div className="Hello">


      <TodoCreateForm create={create} />
      <TodoList list={list} />

    </div >
  );
}

export default App;
