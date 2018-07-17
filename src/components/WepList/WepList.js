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
        this.getCats();
        this.getWeps();
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
        this.props.dispatch({ type: 'FETCH_WEP_LIST'});
    }

    getWepsByCat = ( id ) => {
        this.props.dispatch({ type: 'FETCH_WEPS_FROM_CATS', payload: id });
        
    }

    catsList = () => {
        return ( 
        <div>
        { this.props.wepCats.map( wepCat => {
            return (
                <ExpansionPanel key={ wepCat.id }
                onChange={ () => this.getWepsByCat( wepCat.id )}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <ExpansionPanelDetails>
                        <Typography>{ wepCat.wepcat }</Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanelSummary>
                    { this.wepsList}
            </ExpansionPanel>
        )})}  
    </div>
        )
    }

    wepsList = () => {
        console.log( 'wepsfromcats', this.props.wepsFromCats );
        return (
            <div>
            { this.props.wepsFromCats.map ( wep => {
                <p>{ JSON.stringify( wep )}</p>
            })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <TabsBar />
                <div>
                    <SelectedChar />
                </div>
                <div>
                    { this.catsList() }

                </div>
            </div>
    )}}

export default compose(withStyles(styles),connect( mapStateToProps ))( WepList );