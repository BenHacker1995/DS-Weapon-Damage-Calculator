import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ( reduxState ) => ({
    char: reduxState.char.char,
    details: reduxState.wep.wepDetails
})

class Wep30 extends Component {

    componentDidMount() {
        this.fetchDetails();
    }

    fetchDetails = () => {
        this.props.dispatch({ type: 'FETCH_WEP_DETAIL',
        payload: { id: 30, char: this.props.char }});
    }

    render() {
        return(
            <div>
            { JSON.stringify( this.props.char )}
            { JSON.stringify( this.props.details )}
            </div>
        )
    }
}

export default connect( mapStateToProps )( Wep30 );