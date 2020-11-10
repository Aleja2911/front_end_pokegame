import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import "./Paginations.css";


const Paginations = ({pokemonsPerPage, pokemons, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }
   
    console.log(Math.floor(pokemons/pokemonsPerPage))

    return (
        <nav>
            <Pagination count={30} variant="outlined" color="primary">
                <ul  className="pagination">
                        {pageNumbers.map((number) => (
                            <li key={number} >
                                <a  onClick={() => paginate(number)} href="!#" className="page-link" > 
                                {number}
                                </a>
                            </li>
                        ))}
                </ul>
            </Pagination>
        </nav>
    )


}

export default Paginations;