import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);


const App = () => {
  return <h1>Hello, JSX!</h1>;
}

root.render(<App />);