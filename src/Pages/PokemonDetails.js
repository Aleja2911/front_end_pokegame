import React, { useState, useEffect} from 'react'; 

const PokemonDetails = ( { singlePokemon } ) => {
    const [pokemonDetail, setPokemonDetail] = useState([]);
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.toLowerCase()}`)
            .then((res) => res.json())
            .then((data) => setPokemonDetail(data))
            .catch((error) => console.log(error.message))
    })

    return ( 
        <div>
            {pokemonDetail && pokemonDetail.map((pokemonInfo) => {
                return (
                    <img src={pokemonInfo.sprites.front_default}/> 
                ) 
            })}
        </div>
     );
}
 
export default PokemonDetails;