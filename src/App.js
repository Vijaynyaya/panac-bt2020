import Message from './Message.js';
import {useState} from 'react';
import './style.css';

function App() {
  let [color, setColor] = useState(true);
  let [count, setCount] = useState(99);

  return (
    <div className="main">
    <div className={color ? "back-beer" : "back-dark" } >
      <Message count={count} color={color ? 'default' : 'user'} />
      <button onClick={()=>{setCount(--count)}}>Take another bottle down for yourself.</button>
      <button onClick={()=>{setColor(!color)}}>Change color scheme</button>
    </div>
    </div>
  );
}

export default App;
