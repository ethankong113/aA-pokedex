import { receivePokemonErrors } from '../actions/pokemon_actions';

export const fetchAllPokemon = (success, fail) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success,
    error: fail
  });
};

export const fetchSinglePokemon = (id, success, fail) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error: fail
  });
};

export const registerPokemon = (pokemon, success, fail) => {
  $.ajax({
    method: 'POST',
    url: `api/pokemon`,
    data: {pokemon},
    success,
    error: fail
  });
};

export const failCB = (error) => {
  console.log(error);
};
