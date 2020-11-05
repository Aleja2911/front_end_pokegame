import React, { useState, useEffect } from "react";

const PokemonDetails = ({ singlePokemon }) => {
  const [pokemonImg, setPokemonImg] = useState({
    front: "",
    back: "",
    animated: "",
  });

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
      });
  }, []);

  return (
    <div>
      <img src={pokemonImg.front} style={{ width: 200 }} />
      <img src={pokemonImg.animated} style={{ width: 80 }} />
      <img src={pokemonImg.back} style={{ width: 200 }} />
    </div>
  );
};

export default PokemonDetails;
