import React, {useState, useEffect} from 'react';
import './App.css';
import ReadForm from './components/ReadForm'
import FlashcardForm from './components/FlashcardForm'

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
      <ReadForm />
      <FlashcardForm />
    </div>
  );
}

export default App;
