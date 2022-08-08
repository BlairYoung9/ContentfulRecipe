import React, { useState, useEffect } from 'react';
import './App.css';
import Recipes from './components/recipes/Recipes';
import { getRecipes } from './client';
import Carousel from './components/carousel/Carousel'
import { Link, Switch, Route, BrowserRouter } from "react-router-dom"

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((res) => console.log(res))
  });


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
          <Route exact path = "/">
            <Carousel/>
          </Route>
          <Route exact path = "/recipes">
            <Recipes/>
          </Route>  
       </Switch>
      </div>
    </div>
  );
}

export default App;
