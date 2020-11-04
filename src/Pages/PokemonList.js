import React from 'react'; 

const PokemonList = ({ pokemons }) => {
    console.log(pokemons)

    

    return (
        <div> <h3> All pokemons will display here </h3> 
        <ul>
            {pokemons && pokemons.map((pokemon, index) => <li key={index}>{pokemon.name.english}</li> )}
        </ul>
        </div>
    );
}
export default PokemonList;