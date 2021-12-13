
export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokemonfinder-backend.herokuapp.com/pokemons/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {}
};

export const getPokemons = async () => {
  try {
    let url = `https://pokemonfinder-backend.herokuapp.com/pokemons`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

