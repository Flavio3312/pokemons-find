import React from "react";
import "./styles.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import { getPokemons } from "./api";
import { getPokemonData, searchPokemon } from "./api";
import Footer from "./components/Footer";




const { useState, useEffect } = React;


export default function App() {
  const [pokemons, setPokemons] = useState([]);
  //const [page, setPage] = useState(0);
  //const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      //setTotal(Math.ceil(data.count));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
    //eslint-disable-next-line
  }, []);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      //setPage(0);
      //setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
      <div>
        <Navbar />
        

        <div className="App">
          
          <Searchbar onSearch={onSearch} />
          {notFound ? (
            <div className="not-Found-text">
              <h3>No se encontro el pokemon que buscabas</h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfSTD-ntAG2CMcYcV_d0l9RTPz0Gh___iTg&usqp=CAU"
                alt="rocket"
              />
            </div>
          ) : (
            
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              //page={page}
              //setPage={setPage}
              //total={total}
              
            />
            
          
          )}
        </div>
        <Footer />
        
      </div>
  
  );
}