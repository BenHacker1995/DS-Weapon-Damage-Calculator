import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Wep30 from './WepCat4/Wep30';



const Weapons = ({ match }) => (
    <div>
        <Route path={`data/30`} component={ Wep30 } />
        <Route path={`${ match.url }/forest-animals`} component={ ForestAnimals } />
        <Route path={`${ match.url }/ocean-animals`} component={ OceanAnimals } />
    </div>
);

export default WepRouter;