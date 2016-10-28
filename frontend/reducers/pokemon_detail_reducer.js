import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      let newState = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
