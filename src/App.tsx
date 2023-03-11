import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './components/Characters';
import CCreation from './components/CCreation';
import Navbar from './components/Navbar';
import Clans from './components/Clans';

function App() {
  const [characters, setCharacter] = useState(JSON.parse(localStorage.getItem("characters")) || [])

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters))
  }, [characters])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Characters characters={characters} 
        setCharacter={setCharacter} />} />
        <Route exact path='/creation' element={<CCreation setCharacter={setCharacter} />} />
        <Route exact path='/clans' element={<Clans characters={characters} />} />
      </Routes>
    </div>
  );
}

export default App;
