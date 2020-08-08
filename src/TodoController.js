import React, { useState } from 'react';

import './App.css';



function TodoController(props) {



  const [newTodo, setNewTodo] = useState('');


  const buttonHadler = () => {
    props.addNewTodo(newTodo)
    setNewTodo('')
  }

  return (
    <div >


      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={buttonHadler} > Add</button>


    </div>
  );
}

export default TodoController;
