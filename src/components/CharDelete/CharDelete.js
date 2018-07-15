import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

class CharDelete extends Component {
    state = {
        open: false,
        char: {
            id: this.props.charState.id,
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    deleteChar = () => {
        console.log( 'PAYLOAD: ', this.state.char );        
        this.props.dispatch( { type: 'DELETE_CHAR', payload: this.state.char });
        this.handleClose();
    }

    render() {
        return(
            <div>
                <Button onClick={this.handleOpen}>
                Delete { this.props.charState.charname }</Button>
                <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="form-dialog-title">
                    Delete { this.props.charState.charname }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Do you really want to delete this character?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={ this.deleteChar } color="primary" autoFocus>
                    Yes, Delete Character
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles),connect( mapStateToProps ))( CharDelete );