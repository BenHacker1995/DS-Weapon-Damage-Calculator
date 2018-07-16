import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
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
    wepList: reduxState.wep.wepList
})

class WepList extends Component {


    componentDidMount() {
        this.getCats();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push( '/' );
        }
    }

    getCats = () => {
        this.props.dispatch({ type: 'FETCH_WEP_CATS' });
    }

    getWeps = ( id ) => {
        this.props.dispatch({ type: 'FETCH_WEP_LIST', payload: id });
    }

    wepArr = [];
    wepsList = ( id ) => {
        this.getWeps( id );
        this.wepArr.push( this.props.wepList );
        return <ExpansionPanelDetails> { this.wepArr.map ( weps => {
            <Link to={ weps.wepname } >
            { weps.wepname }</Link>

            })}  
        </ExpansionPanelDetails>
    }

    render() {
        return (
            <div>
                <div>
                    <AppBar position="static">
                        <Tabs>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Characters</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <Link to="/char/create">Create a Character</Link>
                                    </Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails disabled>
                                    <Typography>
                                        Your Characters
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Weapons</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <Link to="/weps">Weapon Categories</Link>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Tabs>
                    </AppBar>
                </div>
                <div>
                    <SelectedChar />
                </div>
            <div>
                { this.props.wepCats.map ( wepCat => {
                    return (
                        <ExpansionPanel key={ wepCat.id }>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                            >
                            <ExpansionPanelDetails onClick={ () => this.wepsList( wepCat.id )}>
                                <Typography>{ wepCat.wepcat }</Typography>
                            </ExpansionPanelDetails>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                { () => this.wepsList( wepCat.id )}
                            </ExpansionPanelDetails>
                    </ExpansionPanel>
                )})}  
            </div>
        </div>
    )}}

export default compose(withStyles(styles),connect( mapStateToProps ))( WepList );