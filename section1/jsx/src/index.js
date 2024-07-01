import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);



const App = () => {

  const name = 'John';

  return (
    //use div or <> empty JSX element </> to wrap  elements 

  //to access variable use {variable_name}
  <div>
    <h1>Hello, JSX!</h1>
    <p>I love React</p>
    
    <p>Hello {name}!</p>
  </div>
  );
};

root.render(<App />);