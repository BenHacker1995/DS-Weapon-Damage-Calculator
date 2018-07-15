import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
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
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
});

const mapStateToProps = state => ({
    user: state.user,
})

class CharCreate extends Component {

    state = {
        char: {
            username: this.props.user.userName,
            charname: '',
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            faith: 0
        }
    }
    

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('/char');
          this.props.history.push('/');
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

    newChar = event => {
        event.preventDefault();
        this.props.dispatch( { type: 'NEW_CHAR', payload: this.state.char });
        this.setState({
            char: {
                username: this.props.user.userName,
                charname: '',
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                faith: 0
            }
        });
        this.props.history.push('/char/list');
    }

    render() {
        return(
            <div>
                <div>
                    <AppBar position="static">
                        <Tabs>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Characters</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails disabled>
                                    <Typography>
                                        Create a Character
                                    </Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <Link to="/char/list">Your Characters</Link>
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
                <form className="input">
                    <input type='text' placeholder="Character Name"
                    value={ this.state.char.charname }
                    onChange={ this.handleChange( 'charname' ) }/>
                    <input type='number' placeholder="Strength"
                    value={ this.state.char.strength }
                    onChange={ this.handleChange( 'strength' ) }/>
                    <input type='number' placeholder="Dexterity"
                    value={ this.state.char.dexterity }
                    onChange={ this.handleChange( 'dexterity' ) }/>
                    <input type='number' placeholder="Intelligence"
                    value={ this.state.char.intelligence }
                    onChange={ this.handleChange( 'intelligence' ) }/>
                    <input type='number' placeholder="Faith"
                    value={ this.state.char.faith }
                    onChange={ this.handleChange( 'faith' ) }/>
                    <button onClick={ this.newChar }>Create Character</button>
                </form>
            </div>
        )
    }
}
export default compose(withStyles(styles),connect( mapStateToProps ))( CharCreate );