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

class CharSelect extends Component {
    state = {
        open: false,
        char: {
            id: this.props.charState.id,
            // username: this.props.user.userName,
            // charname: this.props.charState.char,
            // strength: this.props.charState.strength,
            // dexterity: 0,
            // intelligence: 0,
            // faith: 0
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    selectChar = () => {
        console.log( 'PAYLOAD: ', this.state.char );        
        this.props.dispatch( { type: 'SELECT_CHAR', payload: this.props.charState.id });
        this.handleClose();
    }

    render() {
        return(
            <div>
                <Button onClick={this.handleOpen}>
                Select { this.props.charState.charname }</Button>
                <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="form-dialog-title">
                    Select { this.props.charState.charname }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Select this character?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={ this.selectChar } color="primary" autoFocus>
                    Yes, Select Character
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles),connect( mapStateToProps ))( CharSelect );