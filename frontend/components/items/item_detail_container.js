import { connect } from 'react-redux';
import { requestItem } from '../../actions/item_actions';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let itemId = ownProps.params.itemId;
  // debugger
  let thisPokemon = state.pokemonDetail;
  return { itemDetail: selectPokemonItem(thisPokemon, itemId) };
};

export default connect(
  mapStateToProps
)(ItemDetail);
