import React, { Component } from 'react';
import NavBarSection1 from './NavBarSection1';
import NavBarSection2 from './NavBarSection2';


class NavBar extends Component {

  render() {


    return (
      <div>
        <NavBarSection1 charCreate={() => this.props.history.push('/char/create')}
            charList={() => this.props.history.push('/char/list')}/>
        <NavBarSection2 melee={() => this.props.history.push('/weps')}/>
      </div>
    );
  }
}

export default NavBar;