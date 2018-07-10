import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

class CharCreate extends Component {
    state = {
        char: {
            username: '',
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
        this.props.dispatch( { type: 'NEW_CHAR', payload: this.state.newPlant });
        this.setState({
            char: {
                username: '',
                charname: '',
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                faith: 0
            }
        })
    }

    render() {
        return (
            <div>
                <pre>{ JSON.stringify( this.state )}</pre>
            </div>
        )
    } 
}

export default CharCreate;