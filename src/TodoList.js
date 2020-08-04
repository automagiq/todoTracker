import React from 'react';


function TodoList(props) {






  return (
    <div >

      to do List
      {props.list.map(el => <li key={el.id}>{el.title}</li>)}

    </div >
  );
}
export default TodoList;

