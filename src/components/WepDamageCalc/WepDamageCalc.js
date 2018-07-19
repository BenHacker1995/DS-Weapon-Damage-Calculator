import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
    char: reduxState.char.char,
    wep: reduxState.wep.wepDamages
})

class WepDamageCalc extends Component {

    state = {
        total: 0,
        phys: 0,
        magic: 0,
        fire: 0,
        lightning: 0
    }

    StrDexRating = ( stat ) => {
        if( stat >= 10 && stat < 20 ) {
            let inclvl = 3.5;
            let lvl = stat - 10;
            let inc = inclvl * lvl;
            return 5 + inc;
        }
        else if( stat >= 20 && stat < 40 ) {
            let inclvl = 2.25;
            let lvl = stat - 20;
            let inc = inclvl * lvl;
            return 40 + inc;
        }
        else if( stat >= 40 ) {
            let inclvl = 0.25;
            let lvl = stat - 40;
            let inc = inclvl * lvl;
            return 85 + inc;
        }
        else {
            return null;
        }
    }

    IntFaithRating = ( stat ) => {
        if( stat >= 10 && stat < 30 ) {
            let inclvl = 2.25;
            let lvl = stat - 10;
            let inc = inclvl * lvl;
            return 5 + inc;
        }
        else if( stat >= 30 && stat < 50 ) {
            let inclvl = 1.5;
            let lvl = stat - 30;
            let inc = inclvl * lvl;
            return 50 + inc;
        }
        else if( stat >= 50 ) {
            let inclvl = 20.0/49.0;
            let lvl = stat - 50;
            let inc = inclvl * lvl;
            return 80 + inc;
        }
        else {
            return null;
        }
    }

    StrRating = this.StrDexRating( this.props.char.strength );
    DexRating = this.StrDexRating( this.props.char.dexterity );

    IntRating = this.IntFaithRating( this.props.char.intelligence );
    FaithRating = this.IntFaithRating( this.props.char.faith );
    
    bonusStr = this.basePhys * this.StrScale * this.StrRating;
    bonusDex = this.basePhys * this.DexScale * this.DexRating;

    damages = () => {
        this.setState({
            phys: this.phys,
            magic: this.magic,
            fire: this.fire,
            lightning: this.lightning,
            total: this.total
        });
        this.props.dispatch({ type: 'SET_DAMAGES', payload: this.state });
    }
    phys = this.basePhys + this.bonusStr + this.bonusDex;
    magic = this.baseMagic + this.bonusInt + this.bonusFaith;
    fire = this.baseFire;
    lightning = this.baseLightning;
    total = this.phys + this.magic + this.fire + this.lightning;

    bonusInt = this.baseMagic * this.IntRating * this.IntScaling;
    bonusFaith = this.baseMagic * this.FaithRating * this.FaithScaling;
    
    render() {
        return(
            null
        )
    }
}

export default connect( mapStateToProps )( WepDamageCalc );