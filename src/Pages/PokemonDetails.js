import React from "react";

const PokemonDetails = ({ pokemonImg }) => {
  return (
    <div>
      <img src={pokemonImg.front} style={{ width: 200 }} />
      <img src={pokemonImg.animated} style={{ width: 80 }} />
      <img src={pokemonImg.back} style={{ width: 200 }} />
    </div>
  );
};

export default PokemonDetails;
