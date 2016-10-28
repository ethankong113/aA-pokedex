import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon, failCB} from './util/api_util';
import {createPokemon, receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root_component';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.store = store;
  window.createPokemon = createPokemon;

});
