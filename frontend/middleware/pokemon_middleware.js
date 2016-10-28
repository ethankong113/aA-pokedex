import { failCB, registerPokemon, fetchAllPokemon, fetchSinglePokemon } from '../util/api_util';
import { createPokemon,
         CREATE_POKEMON,
         receiveNewPokemon,
         REQUEST_ALL_POKEMON,
         receiveAllPokemon,
         REQUEST_ONE_POKEMON,
         receiveOnePokemon,
         receivePokemonErrors
       } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));
  const createPokemonSuccess = pokemon => {
    dispatch(receiveNewPokemon(pokemon));
    hashHistory.push(`/pokemon/${pokemon.id}`);
  };
  const betterFail = (error) => {
    dispatch(receivePokemonErrors(error));
  };

  switch(action.type){
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess, failCB);
      return next(action);
    case REQUEST_ONE_POKEMON:
      fetchSinglePokemon(action.id, receiveOnePokemonSuccess, failCB);
      return next(action);
    case CREATE_POKEMON:
      registerPokemon(action.pokemon, createPokemonSuccess, betterFail);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
