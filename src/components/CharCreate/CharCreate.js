import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
})

class CharCreate extends Component {

    state = {
        char: {
            username: this.props.user.userName,
            charname: '',
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            faith: 0
        }
    }

    handleChange = ( key ) => event => {
        this.setState({
            char: {
                ...this.state.char,
                [ key ]: event.target.value
            }
        });
    }

    newChar = event => {
        event.preventDefault();
        this.props.dispatch( { type: 'NEW_CHAR', payload: this.state.char });
        this.setState({
            char: {
                username: this.props.user.userName,
                charname: '',
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                faith: 0
            }
        })
    }

    render() {
        return(
            <div>
                <pre>{ JSON.stringify( this.state.char )}</pre>
                <form className="input">
                    <input type='text' placeholder="Character Name"
                    value={ this.state.char.charname }
                    onChange={ this.handleChange( 'charname' ) }/>
                    <input type='number' placeholder="Strength"
                    value={ this.state.char.strength }
                    onChange={ this.handleChange( 'strength' ) }/>
                    <input type='number' placeholder="Dexterity"
                    value={ this.state.char.dexterity }
                    onChange={ this.handleChange( 'dexterity' ) }/>
                    <input type='number' placeholder="Intelligence"
                    value={ this.state.char.intelligence }
                    onChange={ this.handleChange( 'intelligence' ) }/>
                    <input type='number' placeholder="Faith"
                    value={ this.state.char.faith }
                    onChange={ this.handleChange( 'faith' ) }/>
                    <button onClick={ this.newChar }>Create Character</button>
                </form>
            </div>
        )
    }
}
export default connect( mapStateToProps )( CharCreate )