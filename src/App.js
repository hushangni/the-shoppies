import React, { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar';
import Nominations from './components/Nominations';
import Results from './components/Results';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
    // go to get results
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar 
        userInput={userInput}
        handleOnChange={handleOnChange} 
      />

      <main>
        <Results />
        <Nominations />
      </main>
    </div>
  );
}

export default App;
