import React, { useState, useEffect } from 'react';
import './App.css';
import { client } from './client';

function App() {

  const [recipes, setRecipes] =  useState([]);
  const {getRecipes} = client();


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
