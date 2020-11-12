import React from "react";
import PokemonDetails from "./PokemonDetails";
import Paginations from "./Pagination";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const PokemonList = ({
  pokemons,
  selected,
  setSelected,
  currentPage,
  setCurrentPage,
  pokemonsPerPage,
}) => {
  const classes = useStyles();

  // PAGINATION
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Grid container direction="column">
      <NavBar />
      {selected ? (
        <PokemonDetails />
      ) : (
        <Grid item>
          <List className={classes.listContainer}>
            {pokemons &&
              currentPokemons.map((pokemon, index) => (
                <Link to={`/pokedex/${pokemon.id}`}>
                  <ListItem key={index} onClick={() => setSelected(true)}>
                    <Typography variant="h6">{pokemon.name.english}</Typography>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Grid>
      )}
      <Paginations
        pokemonsPerPage={pokemonsPerPage}
        pokemons={pokemons.length}
        paginate={paginate}
      />
    </Grid>
  );
};
export default PokemonList;
