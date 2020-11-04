import React from 'react'; 
import PokemonDetails from './PokemonDetails';

const PokemonList = ({ singlePokemon, setSinglePokemon, pokemons }) => {


const handleClick = (e) => {
    setSinglePokemon(e.target.innerText); 
} 

    return (
        <div> <h3> All pokemons will display here </h3>
           {singlePokemon ? <PokemonDetails singlePokemon={singlePokemon}/> :  
            <ul> 
                {pokemons && pokemons.map((pokemon, index) => <li key={index} onClick={handleClick}>{pokemon.name.english}</li> )}
            </ul> }
        </div>
    );
}
export default PokemonList;