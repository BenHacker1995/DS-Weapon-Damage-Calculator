import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
    charList: reduxState.char.charList
})

class CharList extends Component {
    componentDidMount() {
        this.getChars();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('/char');
          this.props.history.push('/');
        }
    }
    //   }

    getChars = () => {
        this.props.dispatch({ type: 'FETCH_CHARS', payload: this.props.user.userName });
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