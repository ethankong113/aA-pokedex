import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { withRouter } from 'react-router';

const PokemonIndex = (props) => {
  let {pokemon, children} = props;
  if (pokemon.length === 0) {return (<div>Hi Again</div>);}

  let allPokemonItems = pokemon.map((poke, i) => {
    return(
      <PokemonIndexItem key={i} pokemon={poke}/>
    );
  });

  const createPokemon = () => {
    props.router.push('/pokemon/newpokemon');
  };

  return (
    <div className="pokemon-index">
      {children}
      <button className="discover-btn" onClick={createPokemon}>Discovered A New Pokemon?</button>
      <div className="empty-row"></div>
      <div className="empty-row"></div>
      <ul className="pokemon-index-list">
        {allPokemonItems}
      </ul>
    </div>
  );
};

export default withRouter(PokemonIndex);
