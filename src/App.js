import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';

function App() {
  // const [counter, setcounter] = useState(1);
  const [info, setInfo] = useState({
    name: 'thanh hang tran',
    age: 23,
    address: 'Hanoi Vietnam'
  })

  function handleUpdateInfo() {
    //cach 1
    // setInfo({
    //   ...info,
    //   bio: 'love cofee and flower'
    // });
    //cach 2
    setInfo(prev => ({
      ...prev,
      bio: 'love cofee and flower'
    // });
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdateInfo}>Update info</button>
      </header>
    </div>
  );
}

export default App;
