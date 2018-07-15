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

class CharDelete extends Component {
    render() {
        return(
            <div>
                <Button onClick={this.props.handleOpen}></Button>
                <Dialog
                open={this.props.open}
                onClose={this.props.close}
                aria-describedby="alert-dialog-description"
                >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Do you really want to delete this character?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={ this.props.deleteChar } color="primary" autoFocus>
                    Yes, Delete Character
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withStyles(styles),connect())( CharDelete );