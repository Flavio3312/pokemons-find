import React from "react";
import Carta from "./Carta";
import Card from 'react-bootstrap/Card';
import { Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Pokedex = (props) => {
  const { pokemons,  loading } = props;

  

  const [pokemonData, setPokemonData] = React.useState([]);


  
  React.useEffect(() => {
    axios.get(`https://pokemonfinder-backend.herokuapp.com/pokemons`)
      .then(res => {
        setPokemonData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      // eslint-disable-next-line
 
  }, []);

 


  




  return (
    <>
     
        { loading ?
      
        
        <Row xs={2}  md={6} className="g-2">
         {pokemonData.map((pokemon, index) => {
              return (
              
                  <Col >
                    <Card>
                      <Card.Img variant="top" src={pokemon.img} alt={pokemon.name}  />
                      <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                        <td>{pokemon.type}</td>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
          

              )
            })}
        </Row>
        :
        

        
        <div className="pokedex-grid">
           
         {pokemons.map((pokemon, idx) => {
           return <Carta pokemon={pokemon} key={pokemon.name} />;
         })}
        </div>  
        
        
         
        }
    </> 

     
       
    
     

  );

};

export default Pokedex;