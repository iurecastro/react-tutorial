import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  // run when the component initially rendered
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const url = 'http://localhost:5000/todos';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const storedTodos = await response.json();
      // Update the state
      if (storedTodos) setTodos(storedTodos);
    } catch (error) {
      console.error('Error during GET request:', error);
    }
  };

  const createTodo = async (title) => {
    // form a new todo
    const newTodo = {
      title: title,
      completed: false,
    };

    // call an API to create a new todo
    const url = 'http://localhost:5000/todos';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const storedTodo = await response.json();

      // set a new state
      const updatedTodos = [...todos, storedTodo];

      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error creating a todo:', error);
    }
  };

  const removeTodo = async (id) => {
    // Delete the todo
    const url = `http://localhost:5000/todos/${id}`;

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      // Update the state
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error during DELETE request:', error);
      throw error;
    }
  };

  const changeTodo = async (id, newTitle, completed = false) => {
    // Update todo
    const url = `http://localhost:5000/todos/${id}`;

    const data = { title: newTitle, completed };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedTodo = await response.json();

      // Update the state
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...updatedTodo };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error during PUT request:', error);
      throw error;
    }
  };

  return (
    <main className="main">
      <h1>
        Task Manager <span>Boost Your Productivity with React!</span>
      </h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </main>
  );
};

export default App;
