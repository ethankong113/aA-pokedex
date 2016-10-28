import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.pokemon);
};

export const selectSinglePokemon = (state) => {
  return _.values(state.pokemon);
};

export const selectPokemonItem = (pokemon, itemId) => {
  if (_.isEmpty(pokemon)) { return {}; }

  let selectItem;
  pokemon.items.forEach(item => {
    if (item.id === parseInt(itemId)) { selectItem = item; }
  });
  return selectItem;
};

export const getErrors = (errors) => {
  if (_.isEmpty(errors)) {
    return [];
  } else {
    let errorMessages = errors.responseText;
    return errorMessages.slice(1, errorMessages.length - 1).split(",");
  }
};
