import { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  charList: state.wep.charList
});

class Character extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.redirectChar();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('home');
  }

  redirectChar() {
    let charArr = [];
    for ( let i in this.props.charList ) {
      if ( this.props.charList.length > 0) {
      charArr.push( i );
      }
    }
    if ( charArr.length > 0 ) {
      this.props.history.push('/char/list');
    } else {
      this.props.history.push('/char/create');
    }
  }

  render() {
    return (
      null
    );
  }
}

export default connect(mapStateToProps)( Character );

