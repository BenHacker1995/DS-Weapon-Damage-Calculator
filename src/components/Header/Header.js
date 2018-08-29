import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class Header extends Component {
  render() {
    return(
      <div className="instructions">
        <div>
          <h1 className="lead">Dark Souls Attack Rating Calculator</h1>
          <NavBar history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Header;