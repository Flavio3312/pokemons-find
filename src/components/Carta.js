import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';


const Carta = (props) => {
  const { pokemon } = props;
 
  

  return (
    <div class="main-container">
        <img
            src={pokemon.sprites.front_default}            
            className="pokemon-img"
            alt="pokemon"
           />
    <div class="overlay">
      <div class="content">
         
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        <span>9</span>
        </div>
        <div class="cast">
               <p>{pokemon.name}</p>
               <p>#{pokemon.id}</p>
               <p>{pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text">
                        {type.type.name}
                    </div>
          
                      );
                    })}</p>
        </div>
        <h1>PokeFinder</h1>
        </div>
      </div>
    </div>
  

  );
};

export default Carta;
