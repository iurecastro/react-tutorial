import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);



const App = () => {

  const name = 'John';
  const age = '34';
  const active = true;

  const type = 'range';

  return (
 //use div or <> empty JSX element </> to wrap  elements 
//Ternary operator <li>Status: {active ? 'Active' : ''}</li>
  //to access variable use {variable_name}
  <>
  <div>
    <h1>Hello, JSX!</h1>
    <p>I love React</p>
    
    <p>Hello {name}! Age: {age}</p>
  </div>
  <div>
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Status: {active ? 'Active' : ''}</li>
    </ul>
  </div>

<div>
  <form>
      <div>
        <label>Event Name:</label>
        <input type="text" name="eventName" />
      </div>
      <div>
        <label>Event Date:</label>
        <input type="date" name="date" />
      </div>
      <button type="submit">Submit</button>
  </form>
</div>

<div>
  <label>Zoom Level:</label>
  <input name="zoom" id="zoom" type={type} min="0" max="100" />
</div>


  </>

  );
};

root.render(<App />);