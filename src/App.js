import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("Waiting")

  useEffect(() => {
    fetch('http://localhost:7777')
      .then(res => res.json())
      .then(json => setTitle(json.title))
  })
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
