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

class CharEdit extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        console.log( 'test');
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

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
                        value={ this.props.charState.charname }
                        onChange={ this.props.handleChange( 'charname' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Strength"
                        type="number"
                        value={ this.props.charState.strength }
                        onChange={ this.props.handleChange( 'strength' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Dexterity"
                        type="number"
                        value={ this.props.charState.dexterity }     
                        onChange={ this.props.handleChange( 'dexterity' ) }                               
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Intelligence"
                        type="number"
                        value={ this.props.charState.intelligence }
                        onChange={ this.props.handleChange( 'intelligence' ) }
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Faith"
                        type="number"
                        value={ this.props.charState.faith }
                        onChange={ this.props.handleChange( 'faith' ) }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.closeStats} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.props.updateChar( this.props.charState.id )} color="primary">
                            Edit Character
                        </Button>
                        <Button onClick={this.props.handleDeleteOpen}>Delete</Button>
                            <Dialog
                            open={this.props.openDelete}
                            onClose={this.props.closeDelete}
                            aria-describedby="alert-dialog-description"
                            >
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                Do you really want to delete this character?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.props.closeDelete} color="primary">
                                Cancel
                                </Button>
                                <Button onClick={ () => this.props.deleteChar( this.props.charState.id ) } color="primary" autoFocus>
                                Yes, Delete Character
                                </Button>
                            </DialogActions>
                            </Dialog>
                        </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles))( CharEdit );