import React from 'react';
import ItemDetail from '../items/item_detail';

const PokemonDetail = (props) => {
  let {
    id,
    name,
    attack,
    defense,
    poke_type,
    moves,
    image_url,
    items
  } = props.pokemonDetail;

  const closeDetail = e => props.router.push("/")

  const handleClick = url => e => props.router.push(url);
  let moveLists, itemLists;

  if (moves && moves.length !== 0) {
    moveLists = moves.map((move, idx) => <span className="list-move" key={idx}>{move}</span>);
    itemLists = items.map((item, idx) => (
      <div className="list-item"
        key={idx}
        onClick={handleClick(`/pokemon/${id}/items/${item.id}`)}>
          <div className="item-name">{item.name}</div>
          <div className="item-img"><img src={item.image_url}/></div>
      </div>)
    );
  }

  return(
    <div className="pokemon-detail">
      <div className="detail-header">
        <button className="header-btn" onClick={closeDetail}>X</button>
      </div>
      <div className="empty-row"></div>
      <div className="detail-table">
        <div className="detail-name">{name}</div>
        <div><img src={image_url} /></div>

        <div className="info-row">
          <span>id: {id}</span>
          <span>Attack: {attack}</span>
          <span>Defense: {defense}</span>
          <span>Type: {poke_type}</span>
        </div>
        <div className="move-row">{moveLists}</div>
        <div className="empty-row"></div>
        <div className="item-row">{itemLists}</div>
        <div className="empty-row"></div>
        {props.children}
      </div>
      <div className="empty-row"></div>
    </div>
  );
};

export default PokemonDetail;
