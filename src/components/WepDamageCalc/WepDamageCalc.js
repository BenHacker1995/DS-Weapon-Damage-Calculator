import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
    char: reduxState.char.char,
    details: reduxState.wep.wepDetails,
    damages: reduxState.wep.wepDamages
})

class WepDamageCalc extends Component {

    // componentDidMount() {
    //     // this.fetchDetails();
    //     // this.damages();
    //     this.fetchAllDetails();
    // }

    // state = {
    //     damage: { 
    //         total: 0,
    //         phys: 0,
    //         magic: 0,
    //         fire: 0,
    //         lightning: 0
    //     },
    //     rating: {
    //         strength: 0,
    //         dexterity: 0,
    //         intelligence: 0,
    //         faith: 0
    //     },
    //     scaling: {
    //         strength: 0,
    //         dexterity: 0,
    //         intelligence: 0,
    //         faith: 0
    //     },
    //     req: {
    //         strength: 0,
    //         dexterity: 0,
    //         intelligence: 0,
    //         faith: 0
    //     }
    // }

    // StrDexRating = ( stat ) => {
    //     console.log( 'str/dex', stat );
    //     if( stat >= 10 && stat < 20 ) {
    //         let inclvl = 3.5;
    //         let lvl = stat - 10;
    //         let inc = inclvl * lvl;
    //         return 5 + inc;
    //     }
    //     else if( stat >= 20 && stat < 40 ) {
    //         let inclvl = 2.25;
    //         let lvl = stat - 20;
    //         let inc = inclvl * lvl;
    //         return 40 + inc;
    //     }
    //     else if( stat >= 40 ) {
    //         let inclvl = 0.25;
    //         let lvl = stat - 40;
    //         let inc = inclvl * lvl;
    //         return 85 + inc;
    //     }
    //     else {
    //         return null;
    //     }
    // }

    // IntFaithRating = ( stat ) => {
    //     console.log( 'int/faith', stat );
    //     if( stat >= 10 && stat < 30 ) {
    //         let inclvl = 2.25;
    //         let lvl = stat - 10;
    //         let inc = inclvl * lvl;
    //         return 5 + inc;
    //     }
    //     else if( stat >= 30 && stat < 50 ) {
    //         let inclvl = 1.5;
    //         let lvl = stat - 30;
    //         let inc = inclvl * lvl;
    //         return 50 + inc;
    //     }
    //     else if( stat >= 50 ) {
    //         let inclvl = 20.0/49.0;
    //         let lvl = stat - 50;
    //         let inc = inclvl * lvl;
    //         return 80 + inc;
    //     }
    //     else {
    //         return null;
    //     }
    // }

    // damages = () => {
        
    //     console.log( 'damages' );

    //     this.basePhys = this.props.details.physdmg;
    //     this.baseMagic = this.props.details.magicdmg;
    //     this.baseFire = this.props.details.firedmg;
    //     this.baseLightning = this.props.details.ltngdmg;
    
    //     this.StrScale = this.props.details.strscale;
    //     this.DexScale = this.props.details.dexscale;
    //     this.IntScale = this.props.details.intscale;
    //     this.FaithScale = this.props.details.faithscale;
    
    //     this.StrRating = this.StrDexRating( this.props.char.strength );
    //     this.DexRating = this.StrDexRating( this.props.char.dexterity );
    
    //     this.IntRating = this.IntFaithRating( this.props.char.intelligence );
    //     this.FaithRating = this.IntFaithRating( this.props.char.faith );
    
    //     this.bonusStr = this.basePhys * this.StrScale * this.StrRating;
    //     this.bonusDex = this.basePhys * this.DexScale * this.DexRating;
    
    //     this.bonusInt = this.baseMagic * this.IntScale * this.IntRating;
    //     this.bonusFaith = this.baseMagic * this.FaithScale * this.FaithRating;
    
    //     this.phys = this.basePhys + this.bonusStr + this.bonusDex;
    //     this.magic = this.baseMagic + this.bonusInt + this.bonusFaith;
    //     this.fire = this.baseFire;
    //     this.lightning = this.baseLightning;
    //     this.total = this.phys + this.magic + this.fire + this.lightning;

    //     this.setState({
    //         damages: {
    //             phys: this.phys,
    //             magic: this.magic,
    //             fire: this.fire,
    //             lightning: this.lightning,
    //             total: this.total
    //         },
    //         rating: {
    //             strength: this.StrRating,
    //             dexteriy: this.DexRating,
    //             intelligence: this.IntRating,
    //             faith: this.FaithRating
    //         },
    //         scaling: {
    //             strength: this.StrScale,
    //             dexterity: this.DexScale,
    //             intelligence: this.IntScale,
    //             faith: this.FaithScale
    //         },
    //         req: {
    //             strength: this.props.details.strreq,
    //             dexterity: this.props.details.dexreq,
    //             intelligence: this.props.details.intreq,
    //             faith: this.props.details.faithreq
    //         }
    //     });

    //     this.props.dispatch({ type: 'SET_DAMAGES', payload: this.state });
    // }

    // setDamages = () => {
        
    //     this.setState({
    //         damages: {
    //             phys: this.phys,
    //             magic: this.magic,
    //             fire: this.fire,
    //             lightning: this.lightning,
    //             total: this.total
    //         },
    //         rating: {
    //             strength: this.StrRating,
    //             dexteriy: this.DexRating,
    //             intelligence: this.IntRating,
    //             faith: this.FaithRating
    //         },
    //         scaling: {
    //             strength: this.StrScale,
    //             dexterity: this.DexScale,
    //             intelligence: this.IntScale,
    //             faith: this.FaithScale
    //         },
    //         req: {
    //             strength: this.props.details.strreq,
    //             dexterity: this.props.details.dexreq,
    //             intelligence: this.props.details.intreq,
    //             faith: this.props.details.faithreq
    //         }
    //     });

    //     this.props.dispatch({ type: 'SET_DAMAGES', payload: this.state });
    // }

    // fetchAllDetails = () => {
    //     this.props.dispatch({ type: 'FETCH_WEP_DETAIL', payload: 30 });
    //     this.damages();
    // }

    render() {
        return null
    }
}

export default connect( mapStateToProps )( WepDamageCalc );