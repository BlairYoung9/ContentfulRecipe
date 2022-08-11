import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import Recipes from './components/recipes/recipes';
import Carousel from './components/carousel/carousel'
import { Link, Switch, Route, BrowserRouter } from "react-router-dom"


function App() {

    const [recipes, setRecipes] = useState([]);


  return (
      <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
          </div>
        </header>
        <div className="wrapper">
        </div>
        <Switch>
          <Route exact path="/">
            <Carousel />
          </Route>
          <Route exact path="/recipes">
            <Recipes/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;


