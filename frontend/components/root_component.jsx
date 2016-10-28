import React from 'react';
import { Provider } from 'react-redux';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestOnePokemon } from '../actions/pokemon_actions';
import ItemDetailContainer from './items/item_detail_container';
import ControlledPokemonForm from './pokemon/pokemon_form_container';

const Root = ({ store }) => {
  const requestOnEnter = () => store.dispatch(requestAllPokemon());
  const requestSinglePokemon = (nextState) => store.dispatch(requestOnePokemon(nextState.params.pokemonId));

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
          <Route path="pokemon/newpokemon" component={ControlledPokemonForm} ></Route>
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemon}>
            <Route path="items/:itemId" component={ItemDetailContainer}></Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
