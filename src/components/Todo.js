import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Todo() {
  const dispatch = useDispatch();
  const todosArray = useSelector((state) => {
    console.log('E:::', state);
    let todosIds = Object.keys(state.myTodos);
    console.log('todosIds:', todosIds);
    return todosIds.map((id) => ({
      ...state.myTodos[id],
      id,
    }));
  });

  console.log({ todosArray });

  const handleDelete = (id) => {
    dispatch.myTodos.removeTodo(id);
  };

  const handleAsyncDelete = (id) => {
    dispatch.myTodos.asyncRemoveTodo(id);
  };

  return (
    <ul>
      {todosArray.map((val) => {
        return (
          <div key={val.id}>
            <li>{val.todo}</li>
            <button onClick={() => handleDelete(val.id)}>Delete</button>
            <button onClick={() => handleAsyncDelete(val.id)}>
              Async Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default Todo;
