import React, { useState } from 'react';


function TodoCreateForm(props) {


  const [inputValue, setInputValue] = useState(22);

  const inputOnChange = e => {
    setInputValue(e.target.value)
  };

  const onCreate = () => {
    props.create(inputValue);
    setInputValue('');
  }

  return (
    <div>
      TodoCreateForm

      <input value={inputValue} onChange={inputOnChange} />

      <button onClick={(onCreate)}> create </button>


    </div >
  );
}

export default TodoCreateForm;
