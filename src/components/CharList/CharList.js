import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import CharEdit from '../CharEdit/CharEdit';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


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
    charList: reduxState.char.charList
})

class CharList extends Component {
    state = {
        open: false,
        char: {
            id: 0,
            username: this.props.user.userName,
            charname: '',
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            faith: 0
        }
    };

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
    }

    handleChange = ( key ) => event => {
        this.setState({
            char: {
                ...this.state.char,
                [ key ]: event.target.value
            }
        });
    }

    getChars = () => {
        this.props.dispatch({ type: 'FETCH_CHARS', payload: this.state.char.username });
    }

    handleClickOpen = ( id ) => {
        this.setState({
          open: true,
            char: { id: id } 
        });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    updateChar = event => {
        event.preventDefault();
        this.setState({ char: {
            username: this.props.user.userName}});
        this.props.dispatch( { type: 'UPDATE_CHAR',
        payload: this.state.char });
        this.handleClose();
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
                        </Tabs>
                    </AppBar>
                </div>
            <div>
                {JSON.stringify( this.props.charList )}
                { this.props.charList.map( ( char ) => {
                    return (
                        <ExpansionPanel key={ char.id }>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <ExpansionPanelDetails>
                                <Typography>{ char.charname }</Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Strength: { char.strength }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Dexterity: { char.dexterity }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Intelligence: { char.intelligence }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Faith: { char.faith }
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button>
                                <div>
                                <CharEdit id={ char.id } charState={ this.state.char } open={ this.state.open }
                                handleOpen={ () => this.handleClickOpen( char.id ) } close={ this.handleClose }
                                handleChange={ this.handleChange } updateChar={ this.updateChar } value="Edit Character"/>
                                </div>
                            </Button>
                            <Button
                                onClick={ this.deleteChar }>
                                    Delete Character
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    )
                })}
            </div>
        </div>
        )
    }
}

export default compose(withStyles(styles),connect( mapStateToProps ))( CharList );