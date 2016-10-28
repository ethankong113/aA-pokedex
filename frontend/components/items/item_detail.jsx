import React from 'react';
import _ from 'lodash';

const ItemDetail = (props) => {
  if (_.isEmpty(props.itemDetail)) {
    return (
      <div>
      </div>
    );
  }
  let {name, happiness, price} = props.itemDetail;
  return(
    <ul className="item-detail">
      <hr/>
      <li>Name: {name}</li>
      <li>Price: {price}</li>
      <li>Happiness: {happiness}</li>
    </ul>
  );
};

export default ItemDetail;
