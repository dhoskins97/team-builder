import React, { useState } from 'react';

import Forms from './Forms.js';
import Card from './Card.js';

import './App.scss';


function App() {

  const [entries, setEntries] = useState([]);


  // const [person, setPerson] = useState({name: "", email: ""})

  // const changePerson = event => {
  //   setPerson({...person, [event.target.name]: event.target.value})
  // };



  return (
    <div className="App">
      <Forms />
      {entries.map(entry => {
        return (<Card name={entry.name} email={entry.email} role={entry.role} />)
      })}
    </div>
  );
}

export default App;
