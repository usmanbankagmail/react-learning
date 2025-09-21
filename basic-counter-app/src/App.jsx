import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Counter App</h1>
      <h2>Current Counter is: { count } </h2>
      <button onClick = { () => setCount( prev => prev + 1 ) } > Click Me to Increase Count by 1 </button>
      <button onClick = { () => setCount( prev => prev - 1 ) } > Click Me to Decrease Count by 1 </button>
      <button onClick = { () => setCount( prev => prev - prev ) } > Click Me to Reset The Counter to Zero </button>
    </div>
  )
}

export default App;