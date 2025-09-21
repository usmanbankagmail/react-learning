import { useState } from 'react';

function App(){
  const [count , setCount] = useState(0)
  return (
    <div>
      <h1>Counter App</h1>
      <h2>This is a Counter Application</h2>
      <h3>This application will increase and Decrease Numbers</h3>
      <h4>But the numbers will not go below Zero</h4>
      <h5>Hello, Current Count is { count } </h5>
      <button onClick = { () => setCount( (previous) => previous + 1)}>Increase Count</button>
      {/* <button onClick = { () => setCount( (previous) => previous<1 ? 0 : previous -1 )}>Decrease Count</button> */}
      {/* { <button onClick = { () => setCount( (previous) => {if(previous<1) {return 0;} else {return previous-1} } )}>Decrease Count</button> } */}
      { <button onClick = { () => setCount( (previous) => {if(previous<1) {previous = 0; return previous;} else {previous = previous -1; return previous} } )}>Decrease Count</button> }
      <button onClick = { () => setCount( (previous) => previous - previous)}>Reset Count</button>
    </div>
  )
}

export default App;
