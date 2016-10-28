import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';
import { getErrors } from '../../reducers/selectors';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => { dispatch(createPokemon(pokemon)); }
});

const mapStateToProps = (state) => {
  return {
    errors: getErrors(state.errors)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
