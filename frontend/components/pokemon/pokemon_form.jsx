import React from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router';

class ControlledPokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: ["","","",""]
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateMoves(property, pos) {
    let currMoves = this.state.moves.slice(0);
    return e => {
      currMoves[pos] = e.target.value;
      this.setState({ [property]: currMoves });
    };
  }

  errors() {
    if (this.props.errors === 0) return (<div></div>);
    let errorMessages = this.props.errors.map((error, idx) => <li key={idx}>{error.slice(1, error.length-1)}</li>);
    return(
      <ul>
        {errorMessages}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state);
  }

  closeForm() {
    this.props.router.push('/');
  }

  render() {
    return(
      <div className="poke-form">
        <div className="form-header">
          <button className="form-close-btn" onClick={this.closeForm}>X</button>
        </div>
        <div className="empty-row"></div>
        {this.errors()}
        <img  className="form-img" src="http://cdn.bulbagarden.net/upload/8/84/Professor_Oak_XY.png" />
        <div className="text-container"><h1 className="form-greeting">Hello Trainer! Please enter the new Pokemon you discovered!</h1></div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <input className="form-field"
            type="text" value={this.state.name}
            onChange={this.update('name')}/>
          <br />
          <input className="form-field"
            type="text" value={this.state.image_url}
             onChange={this.update('image_url')}/>
           <br />
          <input className="form-field"
            type="text" value={this.state.poke_type}
             onChange={this.update('poke_type')}/>
           <br />
          <input className="form-field"
            type="number" value={this.state.attack}
             onChange={this.update('attack')}/>
           <br />
          <input className="form-field"
            type="number" value={this.state.defense}
             onChange={this.update('defense')}/>
           <br />
           <div className="move-field-row">
             <input className="form-field move-field"
              type="text" value={this.state.moves[0]}
              placeholder ="First Move"
               onChange={this.updateMoves('moves', 0)}/>
             <input className="form-field move-field"
              type="text" value={this.state.moves[1]}
              placeholder ="Second Move"
               onChange={this.updateMoves('moves', 1)}/>
             <input className="form-field move-field"
              type="text" value={this.state.moves[2]}
              placeholder ="Third Move"
               onChange={this.updateMoves('moves', 2)}/>
             <input className="form-field move-field"
              type="text" value={this.state.moves[3]}
              placeholder ="Forth Move"
               onChange={this.updateMoves('moves', 3)}/>
           </div>
           <br />
           <br />
          <button className="form-btn">Create New Pokemon</button>
          <div className="empty-row"></div>
          <div className="empty-row"></div>
      </form>
      </div>
    );
  };
}

export default withRouter(ControlledPokemonForm);
