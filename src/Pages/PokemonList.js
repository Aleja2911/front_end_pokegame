import React from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonList = ({
  pokemonImg,
  singlePokemon,
  setSinglePokemon,
  pokemons,
  selected,
  setSelected,
}) => {
  const handleClick = (e) => {
    console.log(e.target.innerText);
    setSinglePokemon(e.target.innerText);
    setSelected(true);
  };

  console.log("SELECTED FROM LIST", selected);

  return (
    <div>
      {" "}
      <h3> All pokemons will display here </h3>
      {selected && singlePokemon ? (
        <PokemonDetails pokemonImg={pokemonImg} />
      ) : (
        <ul>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index} onClick={handleClick}>
                {pokemon.name.english}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
export default PokemonList;
