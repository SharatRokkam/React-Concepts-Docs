import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  todoCount: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, { id: state.todoCount + 1, text: action.payload }],
        todoCount: state.todoCount + 1
      };
    case 'removeTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      throw new Error();
  }
}

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    dispatch({ type: 'addTodo', payload: inputValue });
    setInputValue('');
  }

  function handleRemove(id) {
    dispatch({ type: 'removeTodo', payload: id });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>Add Todo</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}