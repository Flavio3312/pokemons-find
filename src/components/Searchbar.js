import React from 'react';

import { allPokemonNames } from './context/allPokemonNames';


const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");


  const onChange = (e) => {
    
    setSearch(e.target.value);

    const filteredPokemon = allPokemonNames.filter(pokemon => pokemon.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log(filteredPokemon[0]);
    setSearch(filteredPokemon[0]);

    
  };

  const onClick = async (e) => {   
    onSearch(search);

  };
  

  return (
    <div className = "searchbar-container">
      <div className="searchbar">
        <input
          
          type="search"
          placeholder="nombre parcial del poke"
          onChange={onChange}
        />
    </div>
      <div className="search-btn">
        <button onClick={onClick}>Buscar
           
        </button>
      </div>
    </div>
  );
};

export default Searchbar;