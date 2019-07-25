import React, { useState } from 'react';

import Forms from './Forms.js';
import Card from './Card.js';

import './App.scss';


function App() {

  const [entries, setEntries] = useState([]);

  return (
    <div className="App">
      <Forms setEntries={setEntries}/>
      <div className="cardsBox"> 
        {entries.map(entry => {
          return (<Card name={entry.name} email={entry.email} role={entry.role} />)
        })}
      </div>
    </div>
  );
}

export default App;
