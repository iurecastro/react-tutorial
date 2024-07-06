import { useState } from 'react';
import TodoEdit from './TodoEdit';
import EditIcon from '../edit.svg';
import DeleteIcon from '../delete.svg';

const TodoShow = ({ todo, removeTodo, changeTodo }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    removeTodo(todo.id);
  };

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();

    changeTodo(todo.id, todo.title, !todo.completed);
    setShowEdit(false);
  };

  if (showEdit)
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  else {
    return (
      <li className="todo" onDoubleClick={handleDoubleClick}>
        <p className={todo.completed ? 'completed' : 'open'}>{todo.title}</p>

        <div className="actions">
          <button onClick={handleDelete}>
            <img src={DeleteIcon} />
          </button>
          <button onClick={handleEdit}>
            <img src={EditIcon} />
          </button>
        </div>
      </li>
    );
  }
};

export default TodoShow;
