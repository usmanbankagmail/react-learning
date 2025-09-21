import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  // var previous = 0;

  return(
    <div>
      <h2>Counter App</h2>
      <h2>This will double or half or Reset the Counter</h2>
      <h3>It will not go below zero</h3>
      <p>Current Counter is {count}</p>
      <button onClick = { () => setCount((previous) => previous+1) }>Increase</button>
      <button onClick = { () => setCount((previous) => previous<1 ? 0 : (previous - 1))} >Decrease</button>
      <button onClick = { () => setCount( (previous) => previous * 2)}>Double</button>
      <button onClick = { () => setCount( (previous) => previous < 1 ? 0 : Math.floor(previous/2))}>Half</button>
      <button onClick = { () => setCount( 0 )}>Reset</button>
    </div>
  )
}

export default App;