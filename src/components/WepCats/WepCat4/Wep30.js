import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ( reduxState ) => ({
    char: reduxState.char.char,
    details: reduxState.wep.wepDetails,
    damages: reduxState.wep.wepDamages
})

class Wep30 extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_WEP_DETAIL', payload: 30 })
    }

    render() {
        return(
            <div>
            { JSON.stringify( this.props.details )}
            { JSON.stringify( this.props.damages )}
            </div>
        )
    }
}

export default connect( mapStateToProps )( Wep30 );