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
    render() {
        return(
            <div>
                <Button onClick={this.props.handleOpen}></Button>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.close}
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
                        id="name"
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
                        <Button onClick={this.props.close} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.updateChar} color="primary">
                            Edit Character
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles),connect())( CharEdit );