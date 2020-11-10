import React from "react";

import PokemonDetails from "./PokemonDetails";
import Paginations from "./Paginations";

const PokemonList = ({
  pokemonImg,
  singlePokemon,
  setSinglePokemon,
  pokemons,
  selected,
  setSelected,
  currentPage, 
  setCurrentPage,
  pokemonsPerPage,  
}) => {
  const handleClick = (e) => {
    console.log(e.target.innerText);
    setSinglePokemon(e.target.innerText);
    setSelected(true);
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("SELECTED FROM LIST", selected);

  return (
    <div>
      {" "}
      <h3> All pokemons will display here </h3>
      {selected && singlePokemon ? (
        <PokemonDetails pokemonImg={pokemonImg} />
      ) : (
        <ul>
          {currentPokemons &&
            currentPokemons.map((pokemon, index) => (
              <li key={index} onClick={handleClick}>
                {pokemon.name.english}
              </li>
            ))}
        </ul>
      )}
      <Paginations pokemonsPerPage={pokemonsPerPage} pokemons={pokemons.length} paginate={paginate} />
    </div>
  );
};
export default PokemonList;
