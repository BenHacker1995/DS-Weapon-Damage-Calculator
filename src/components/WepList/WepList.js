import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import TabsBar from '../TabsBar/TabsBar';
import SelectedChar from '../SelectedChar/SelectedChar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,

    wepCats: reduxState.wep.wepCats,
    wepList: reduxState.wep.wepList,
    wepsFromCats: reduxState.wep.wepsFromCats
})

class WepList extends Component {

    componentDidMount() {
        // this.getWepsByCat();
        this.getWeps();
        this.getCats();
        this.getWepsByCat();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push( '/' );
        }
    }

    getCats = () => {
        this.props.dispatch({ type: 'FETCH_WEP_CATS' });
    }

    getWeps() {
        this.props.dispatch({ type: 'FETCH_WEP_LIST' })
        this.getWepsByCat();
    }

    getWepsByCat = () => {
        console.log( 'getWepsByCat' );
        this.wepsByCat();
        this.props.dispatch({ type: 'GET_WEP_LISTS', payload: this.wepsByCatArr })
    }

    wepsByCatArr = [];
    wepsByCat = () => {
        for( let id = 1; id < 17; id ++ ) {
            let wepsByCatId = this.props.wepList.filter( wep => { 
               console.log( 'catid', wep.cat_id, 'id', id );
                return wep.cat_id === id 
            });
                // let wepsByCatId = this.props.wepList.filter( this.isWepCatId( this.props.wepList.cat_id, id ));
                this.wepsByCatArr.push( wepsByCatId );
            }
        
        console.log( 'Array', this.wepsByCatArr );
    }

    wepsByCategory;
    wepsFromCats = ( id ) => {
        // for( let i = 0; i < 16; i ++ ) {
        //     if( i + 1 === id ) {
        //         this.wepsByCategory = this.props.wepsFromCats[ i ];
        //         console.log( this.wepsByCategory );
        //     }
            this.wepsByCategory = this.props.wepsFromCats[ id - 1 ];
            console.log( this.wepsByCategory );
            return this.wepsByCategory.map( wep => { return wep.wepname })
                // <ExpansionPanelDetails>
                //     <Typography>{wep.wepname}</Typography>
                // </ExpansionPanelDetails>
                // wep.wepname})
        // }
    }

    render() {
        return (
            <div>
                <TabsBar />
                <div>
                    <SelectedChar />
                </div>
                <div>
                    { this.props.wepCats.map( wepCat => {
                        return (
                            <ExpansionPanel key={ wepCat.id }
                            // onChange={ () => this.getWepsByCat( wepCat.id )}>
                            >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ExpansionPanelDetails>
                                    <Typography>{ wepCat.wepcat }</Typography>
                                </ExpansionPanelDetails>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>{ this.wepsFromCats( wepCat.id ) }</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    })}
                </div>
            </div>
    )}}

export default compose(withStyles(styles),connect( mapStateToProps ))( WepList );