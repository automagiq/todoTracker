import React, { useState } from 'react';

import './App.css';



function TodoListItem(props) {

  const todoList = props.list;
  const [updatedTitle, setUpdatedTitle] = useState(el.title)

  return (
    <div >


      <li>
        {el.title}
        <button onClick={() => props.deleteTodo(el.id)}> delete </button>

        <input value={updatedTitle} />
        <button > Edit</button>

      </li>

      )



    </div>
  );


  export default TodoListItem;
