import React, { useState, useEffect } from "react";

//router//
import { Switch, Route } from 'react-router-dom';

import './App.css';

// importing pages //
import PokemonList from './Pages/PokemonList';
import PokemonDetails from './Pages/PokemonDetails';
import PokemonSuperDetails from './Pages/PokemonSuperDetails';

const  App = () =>  {
// set up the states //
const [pokemons, setPokemons] = useState([]);

// get all Pokemons //
useEffect(() => {
    fetch('http://')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.log('the pokemon escaped!'));
}, []);



  return (
    <div className="App">
      <div>
        <h3> Hello World </h3>
      </div>
      <main>
        <Switch>
          <Route 
            path='/'
            render={() => (<PokemonList />)} >
          </Route>

          <Route> 
            <PokemonDetails /> 
          </Route>
          <Route>
            <PokemonSuperDetails />       
          </Route>
        </Switch>
          
          
    
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
