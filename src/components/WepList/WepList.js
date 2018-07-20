import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import TabsBar from '../TabsBar/TabsBar';
import SelectedChar from '../SelectedChar/SelectedChar';
import { withStyles } from '@material-ui/core/styles';
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
                this.wepsByCatArr.push( wepsByCatId );
            }
        
        console.log( 'Array', this.wepsByCatArr );
    }

    wepsByCategory;
    wepsFromCats = ( id ) => {
        this.wepsByCategory = this.props.wepsFromCats[ id - 1 ];
        console.log( this.wepsByCategory );

        return this.wepsByCategory.map( wep => { 
            return <ExpansionPanelDetails>
            <Typography>
                <Link to={ this.wepLink( wep.id ) }>
                {wep.wepname}</Link>
            </Typography>
            </ExpansionPanelDetails>
        })
    }

    wepLink = ( id ) => {
        console.log( id );
        return `/data/${ id }`
    }

    wepData = ( id ) => {
        this.props.dispatch({ type: 'FETCH_WEP_DETAIL', payload: id });
    }

    render() {
        return (
            <div className='background'>
                <TabsBar />
                <div>
                    <SelectedChar />
                </div>
                <div>
                    { this.props.wepCats.map( wepCat => {
                        return (
                            <ExpansionPanel key={ wepCat.id }
                            >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ExpansionPanelDetails>
                                    <Typography>{ wepCat.wepcat }</Typography>
                                </ExpansionPanelDetails>
                                </ExpansionPanelSummary>
                                    { this.wepsFromCats( wepCat.id ) }
                            </ExpansionPanel>
                        )
                    })}
                </div>
            </div>
    )}}

export default compose(withStyles(styles),connect( mapStateToProps ))( WepList );