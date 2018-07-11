import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharCreate from '../CharCreate/CharCreate';
import CharList from '../CharList/CharList';

const mapStateToProps = state => ({
    user: state.user,
    newChar: state.newChar,
    charList: state.charList
  });

class Character extends Component {


    getChars = () => {
        this.props.dispatch({ type: 'FETCH_CHARS', payload: this.props.charList.username });
    }


    render() {
        if ( true ) {
            return(
                <CharList getChars={ this.getChars }/>
            )
        } else {
            return(
                <CharCreate  newChar={ this.newChar }
                handleChange={ this.handleChange }
                char={ this.state.char }
                />
            )
        }
    } 
}

export default connect( mapStateToProps )( Character );