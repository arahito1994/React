import { useEffect, useState, useContext, useRef } from 'react';
import './App.css'
import ShinCodeContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref =useRef();

  const handleClick = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    console.log("HelloHooks");
  }, [count]);

  const handleRef = () =>{
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <h2>{shincodeInfo.name}</h2>
      <h2>{shincodeInfo.age}</h2>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref ={ref}/>
      <button onClick={handleRef}>useRef</button>

    </div>
  )
}

export default App
