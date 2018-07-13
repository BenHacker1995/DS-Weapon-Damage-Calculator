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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
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

    handleEdit = ( char ) => {
        console.log( 'handleEdit' );
        // let dialog = 
            // <div>
            //     <Dialog
            //         open={ this.state.open }
            //         onClose={this.handleClose}
            //         aria-labelledby="form-dialog-title"
            //     >
            //         <DialogTitle id="form-dialog-title">
            //         Edit Character</DialogTitle>
            //         <DialogContent>
            //             <DialogContentText>
            //                 Edit Stats here
            //             </DialogContentText>
            //             <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Character Name"
            //             type="Text"
            //             fullWidth
            //             value={ this.state.char.charname }
            //             onChange={ this.handleChange( 'charname' ) }
            //             />
            //             <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Strength"
            //             type="number"
            //             value={ this.state.char.strength }
            //             onChange={ this.handleChange( 'strength' ) }
            //             />
            //             <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Dexterity"
            //             type="number"
            //             value={ this.state.char.dexterity }     
            //             onChange={ this.handleChange( 'dexterity' ) }                               
            //             />
            //             <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Intelligence"
            //             type="number"
            //             value={ this.state.char.intelligence }
            //             onChange={ this.handleChange( 'intelligence' ) }
            //             />
            //             <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Faith"
            //             type="number"
            //             value={ this.state.char.faith }
            //             onChange={ this.handleChange( 'faith' ) }
            //             />
            //         </DialogContent>
            //         <DialogActions>
            //             <Button onClick={this.handleClose} color="primary">
            //                 Cancel
            //             </Button>
            //             <Button onClick={this.updateChar} color="primary">
            //                 Edit Character
            //             </Button>
            //         </DialogActions>
            //     </Dialog>
            // </div>
            <CharEdit id={ char.id } charState={ this.state.char } open={ this.state.open }
            handleOpen={ () => this.handleClickOpen( char.id ) } close={ this.handleClose }
            handleChange={ this.handleChange } updateChar={ this.updateChar }/>
            // return dialog;
    }

    updateChar = event => {
        event.preventDefault();
        console.log( "state", this.state.char );
        this.props.dispatch( { type: 'UPDATE_CHAR',
        payload: this.state.char });
        this.setState({
            char: {
                id: this.state.id,
                username: this.props.user.userName,
                charname: '',
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                faith: 0
            }
        });
        this.props.history.push( '/char/list' );
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
                { JSON.stringify( this.state.char )}
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
                                {/* // onClick={ () => this.handleEdit(char) }> */}
                                <div>
                                <CharEdit id={ char.id } charState={ this.state.char } open={ this.state.open }
                                handleOpen={ () => this.handleClickOpen( char.id ) } close={ this.handleClose }
                                handleChange={ this.handleChange } updateChar={ this.updateChar }/>
                                Edit Character
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