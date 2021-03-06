import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
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
    char: reduxState.wep.char,
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
        this.wepsByCat();
        this.props.dispatch({ type: 'GET_WEP_LISTS', payload: this.wepsByCatArr })
    }

    wepsByCatArr = [];
    wepsByCat = () => {
        for( let id = 1; id < 17; id ++ ) {
            let wepsByCatId = this.props.wepList.filter( wep => { 
                return wep.cat_id === id 
            });
                this.wepsByCatArr.push( wepsByCatId );
        }        
    }

    wepsByCategory;
    wepsFromCats = ( id ) => {
        this.wepsByCategory = this.props.wepsFromCats[ id - 1 ];
        return this.wepsByCategory.map( wep => { 
            return <ExpansionPanelDetails key={wep.id}>
                    <Link to={`/data/${wep.id}`}
                    onClick={() => this.fetchDetails(wep.id)}>
                        {wep.wepname}
                    </Link>
            </ExpansionPanelDetails>
        })
    }

    fetchDetails = (id) => {
        this.props.dispatch({ type: 'FETCH_WEP_DETAIL',
        payload: { id: id, char: this.props.char }});
    }

    render() {
        return (
            <div className='background'>
                <Header history={this.props.history} />
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