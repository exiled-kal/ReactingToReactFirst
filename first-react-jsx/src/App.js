import React from 'react';
// import logo from './logo.svg';
import './App.css';

import FancyDiv from './components/FancyDiv';

function App() {
  const myName = 'Tsering Kalden';
  const myBlockofStuff = <div>{myName}</div>

  const hobbies = [
    'listening to music',
    'coding',
    'playing games',
    'hiking'
  ];
  
  return (
    // jsx attribute javascript syntax extension
    <div className="App">
      <h1>Hello from create React App</h1>
      {myBlockofStuff}
      <ul>
        {hobbies.map((hobby, idx) => {
          return <li key = {idx}>{hobby}</li>;
        })}
      </ul>
      <FancyDiv>This is inside the fancy div</FancyDiv>
      <FancyDiv>Second fancy div is successful</FancyDiv>
    </div>
  );
}

export default App;
