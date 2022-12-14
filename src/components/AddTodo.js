import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [myTodo, setMyTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMyTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch.myTodos.addTodo(myTodo);
    setMyTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter TODO"
          value={myTodo}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
