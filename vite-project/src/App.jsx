import { useEffect, useState, useContext } from 'react';
import './App.css'
import ShinCodeContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);

  const handleClick = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    console.log("HelloHooks");
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <h2>{shincodeInfo.name}</h2>
      <h2>{shincodeInfo.age}</h2>
    </div>
  )
}

export default App
