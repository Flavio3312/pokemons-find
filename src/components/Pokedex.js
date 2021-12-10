import React from "react";
import Carta from "./Carta";
import Pagination from "./Pagination";
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage)
  }
  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage)
  };


  return (
    <div>
      <div className="header">
        <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
        />
        </div>
        { loading ?
      <div><Spinner color="primary"/></div>
      :
      <div className="pokedex-grid">
        {pokemons.map((pokemon, idx) => {
          return <Carta pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
        }
    </div>
  );
};

export default Pokedex;