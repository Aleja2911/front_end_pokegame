import React, { useState, useEffect } from "react";
import Battlefied from "./Pages/Battlefield";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PokemonList from "./Pages/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(30);

  // CATCH THEM ALL FROM POKEDEX
  useEffect(() => {
    fetch("https://pokemon-be.herokuapp.com/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.log("the pokemon escaped!"));
  }, []);

  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            path="/pokedex/:id"
            render={(props) => (
              <PokemonList
                pokemons={pokemons}
                selected={selected}
                setSelected={setSelected}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pokemonsPerPage={pokemonsPerPage}
                {...props}
              />
            )}
          />

          <Route
            path="/pokedex"
            render={(props) => (
              <PokemonList
                pokemons={pokemons}
                selected={selected}
                setSelected={setSelected}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pokemonsPerPage={pokemonsPerPage}
                {...props}
              />
            )}
          />

          <Route
            path="/battlefield"
            render={(props) => <Battlefied pokemons={pokemons} {...props} />}
          />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
