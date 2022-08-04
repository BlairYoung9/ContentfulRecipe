import React, { useState, useEffect } from 'react';
import './App.css';
import { getRecipes } from './client';

function App() {

  const [recipes, setRecipes] =  useState([]);

  useEffect(() => {
    getRecipes().then((res) => console.log(res))
  });
  

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>Recipe Book</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
