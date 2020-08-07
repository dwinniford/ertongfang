import React, {useState, useEffect} from 'react';
import './App.css';
import ReadForm from './components/ReadForm'
import FlashcardForm from './components/FlashcardForm'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

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
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
