import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Paginations = ({ pokemonsPerPage, pokemons, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("alll", pokemons / pokemonsPerPage);

  const handlePage = (e) => {
    paginate(Number(e.target.innerText));
  };

  return (
    <Pagination count={27} variant="outlined" onClick={(e) => handlePage(e)} />
  );
};

export default Paginations;
