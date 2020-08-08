import React, { useState } from 'react';

import './App.css';



function TodoList(props) {

  const todoList = props.list;
  const [updatedTitle, setUpdatedTitle] = useState(el.title)

  return (
    <div >

      {todoList.map(el => {
        return <li>
          {el.title}
          <button onClick={() => props.deleteTodo(el.id)}> delete </button>

          <input value={updatedTitle} />
          <button > Edit</button>

        </li>
      }
      )}



    </div>
  );
}

export default TodoList;
