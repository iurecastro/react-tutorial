import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);



const App = () => {

  const name = 'John';
  const age = '34';
  const active = true;

  const type = 'range';

  const btnVar = {
    backgroundColor:"#000",
    minWidth:80,
    color:"#dedede"

  };

  return (
//use div or <> empty JSX element </> to wrap  elements 
//Ternary operator <li>Status: {active ? 'Active' : ''}</li>
//to access variable use {variable_name}
// first button add css inline 
//second button add css by props 
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
        <label htmlFor='eventName'>Event Name:</label>
        <input type="text" name="eventName" />
      </div>
      <div>
        <label htmlFor='date'>Event Date:</label>
        <input type="date" name="date" />
      </div>
      <div>
        <label htmlFor='zoom'>Zoom Level:</label>
        <input name="zoom" id="zoom" type={type} min="0" max="100" />
      </div>
      
      <button className='btn' style={{backgroundColor:'#F9DC5C',border:'None', display: 'inline-block',minWidth: '80px', padding: '0.25rem 0.75rem', }} type="submit">Submit</button>
      <button className='btn' style={btnVar} type="submit">Submit 2</button>
  </form>
</div>




  </>

  );
};

root.render(<App />);