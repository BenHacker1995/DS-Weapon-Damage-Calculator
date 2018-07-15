import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
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
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

  const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
})

class CharEdit extends Component {
    state = {
        open: false,
        char: {
            id: this.props.charState.id,
            username: this.props.user.userName,
            charname: '',
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            faith: 0
        }
    }

    handleOpen = () => {
        console.log( 'test');
        this.setState({ open: true });
        console.log( this.props.charState );
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = ( key ) => event => {
        this.setState({
            char: {
                ...this.state.char,
                [ key ]: event.target.value
            }
        });
    }

    updateChar = () => {
        this.setState({ char: {
            ...this.state.char,
        }});
        this.props.dispatch( { type: 'UPDATE_CHAR',
        payload: this.state.char });
        this.handleClose();
    }

    render() {
        return(
            <div>
                <Button onClick={this.handleOpen }>
                Edit { this.props.charState.charname }</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                    Edit { this.props.charState.charname }</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Edit Stats here
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Character Name"
                        type="Text"
                        fullWidth
                        value={ this.state.charname }
                        onChange={ this.handleChange( 'charname' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Strength"
                        type="number"
                        value={ this.state.strength }
                        onChange={ this.handleChange( 'strength' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Dexterity"
                        type="number"
                        value={ this.state.dexterity }     
                        onChange={ this.handleChange( 'dexterity' ) }                               
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Intelligence"
                        type="number"
                        value={ this.state.intelligence }
                        onChange={ this.handleChange( 'intelligence' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Faith"
                        type="number"
                        value={ this.state.faith }
                        onChange={ this.handleChange( 'faith' ) }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.updateChar} color="primary">
                            Edit Character
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles), connect( mapStateToProps ))( CharEdit );