import React from 'react'; 

const PokemonList = ({ singlePokemon, setSinglePokemon, pokemons }) => {


const handleClick = (e) => {
    setSinglePokemon(e.target.innerText); 
} 

    return (
        <div> <h3> All pokemons will display here </h3>
            {singlePokemon && <h2> pika, pika </h2> } 
            <ul> 
                {pokemons && pokemons.map((pokemon, index) => <li key={index} onClick={handleClick}>{pokemon.name.english}</li> )}
            </ul> 
        </div>
    );
}
export default PokemonList;