import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import _ from 'lodash';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = action.pokemon;
      return newState;
    case RECEIVE_NEW_POKEMON:
      newState = _.merge({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
