import React from 'react';



const Carta = (props) => {
  const { pokemon } = props;

  React.useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  

  

  return (
    
           <div class="main-container">
              <img
                  src={pokemon.img}            
                  className="pokemon-img"
                  alt="pokemon"
                  />
            <div class="overlay">
            <div class="content">
     
    
                <div class="cast">
                <h4>{pokemon.name}</h4>
                  <p>Velocidad:{pokemon.velocidad}</p>
                  <p>Tipo:{pokemon.type}</p>
                  <p>Altura:{pokemon.height}</p>
                  <p>Peso:{pokemon.weight}</p>
                  <p>Fuerza:{pokemon.fuerza}</p>
                  <p>Defensa:{pokemon.defensa}</p>
                  <p>Vida:{pokemon.vida}</p>
                </div>
             </div>
                  
         
           </div>
        </div>
  );
};




export default Carta;