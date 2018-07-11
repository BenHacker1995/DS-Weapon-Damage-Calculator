import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
    charList: reduxState.char.charList
})

class CharList extends Component {

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
    }

    render() {
        return (
            <div>
                { this.props.charList.map( char => 
                <p>{ char.charname }</p>)}
                {/* <pre>{ JSON.stringify( this.props.charList )}</pre> */}
            </div>
        )
    }
}

export default connect( mapStateToProps )( CharList );