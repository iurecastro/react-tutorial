import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-create">
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a task"
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoCreate;
