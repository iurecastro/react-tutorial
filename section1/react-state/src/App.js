import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>

      <main>
        <p>{counter}</p>
        <div>
          <button onClick={increase}>+</button>

          <button onClick={decrease}>-</button>
        </div>
      </main>
    </>
  )



}

export default App;
