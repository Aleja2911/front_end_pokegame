import React, { useState, useEffect } from "react";
import Battlefied from "./Pages/Battlefield";
import { Switch, Route } from "react-router-dom";


import "./App.css";
import PokemonList from "./Pages/PokemonList";


const App = () => {
  // set up the states //
  const [pokemons, setPokemons] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState("pikachu");
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(30);

  // THIS SHOULD BE DELETED IF YOU DECIDE TO USE BACKEND API CALL INSTEAD
  const [pokemonImg, setPokemonImg] = useState({
    front: "",
    back: "",
    animated: "",
  });

  // CATCH THEM ALL FROM POKEDEX
  useEffect(() => {
    fetch("https://pokemon-be.herokuapp.com/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.log("the pokemon escaped!"));
  }, []);

  // GET PICS FROM POKEAPI FOR POKEDEX (SHOULD BE DELETED IF YOU DECIDE TO USE BACKEND API CALL INSTEAD)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonImg((prev) => ({
          ...prev,
          front: data.sprites.front_default,
          back: data.sprites.back_default,
          animated:
            data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
        }));
      })
      .catch((err) => console.log(err.message));
  }, [singlePokemon]);

  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            path="/pokedex"
            render={(props) => (
              <PokemonList
                pokemons={pokemons}
                pokemonImg={pokemonImg}
                singlePokemon={singlePokemon}
                setSinglePokemon={setSinglePokemon}
                selected={selected}
                setSelected={setSelected}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pokemonsPerPage={pokemonsPerPage}
                {...props}
              />
            )}
            ></Route>
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
