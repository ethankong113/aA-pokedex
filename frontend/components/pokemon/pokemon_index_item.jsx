import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {

  const handleClick = url => e => props.router.push(url);

  return(
    <li className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${props.pokemon.id}`)}>
      <h2 className="poke-name">{props.pokemon.name}</h2>
      <img src={props.pokemon.image_url} />
    </li>
  );
};

export default withRouter(PokemonIndexItem);
