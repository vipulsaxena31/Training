import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build projects' },
  ]);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    );
    setTodos(updatedTodos);
    setEditId(null);
  };

  const startEdit = (id, text) => {
    setEditText(text);
    setEditId(id);
  };

  const cancelEdit = () => {
    setEditText('');
    setEditId(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updateTodo(todo.id, editText)}>
                  Update Todo
                </button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => startEdit(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Todo;
