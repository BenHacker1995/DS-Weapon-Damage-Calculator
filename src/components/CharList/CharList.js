import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import CharEdit from '../CharEdit/CharEdit';
import CharDelete from '../CharDelete/CharDelete';
import CharSelect from '../CharSelect/CharSelect';
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
    charList: reduxState.char.charList,
    char: reduxState.char.char
})

class CharList extends Component {
    state = {
        openDelete: false,
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

    componentDidMount() {
        this.getChars();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('/char');
          this.props.history.push( '/' );
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
        this.props.dispatch({ type: 'INITIALIZE_CHARS' });
        this.props.dispatch({ type: 'FETCH_CHARS', payload: this.props.user.userName });
    }

    handleDeleteOpen = ( id ) => {
        this.setState({
          openDelete: true,
            char: { id: id } 
        });
    };
    
    handleDeleteClose = () => {
        this.setState({ openDelete: false });
    };

    updateChar() {
        this.setState({ char: {
            id: this.props.charState.id,
            username: this.props.user.userName}});
        this.props.dispatch( { type: 'UPDATE_CHAR',
        payload: this.state.char });
        this.handleStatsClose();
    }

    editChar = (charState) => {
        return <CharEdit charState={ charState } />
    }

    deleteChar = ( charState ) => {
        return <CharDelete charState={ charState } />
    }

    selectChar = ( charState ) => {
        return <CharSelect charState={ charState } />
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
                <pre>{JSON.stringify( this.props.char )}</pre>
                { this.props.charList.map ( charState => {
                    return (
                        <ExpansionPanel key={ charState.id }>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <ExpansionPanelDetails>
                                <Typography>{ charState.charname }</Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>
                                <Typography>ID: { charState.id }</Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Strength: { charState.strength }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Dexterity: { charState.dexterity }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Intelligence: { charState.intelligence }
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>                               
                                <Typography>
                                    Faith: { charState.faith }
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                                <Typography>
                            { this.editChar( charState ) }
                                </Typography>
                                <Typography>
                            { this.deleteChar( charState ) }
                                </Typography>
                                <Typography>
                            { this.selectChar( charState ) }
                                </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )})}  
            </div>
        </div>
    )}}

export default compose(withStyles(styles),connect( mapStateToProps ))( CharList );