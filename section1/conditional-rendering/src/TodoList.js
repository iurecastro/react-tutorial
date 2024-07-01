import React from "react";

const TodoList = ({ todos }) => {
    const renderedTodos = todos.map(({ id, title, completed }) => {
      return (
        <div key={id}>{completed && '✔ '}{completed || '✖ '}{title}
        </div>
      );
    });
  
    return <section>{renderedTodos}</section>;
  };
  
  export default TodoList;