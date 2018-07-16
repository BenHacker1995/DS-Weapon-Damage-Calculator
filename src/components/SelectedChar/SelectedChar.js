import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
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
    char: reduxState.char.char
})

class SelectedChar extends Component {

    render() {
        return(
            <div>
                { this.props.char.map ( charState => {
                return (
                    <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ExpansionPanelDetails>
                                    <Typography>Selected Character: { charState.charname }</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Strength: { charState.strength }
                                </Typography>                             
                                <Typography>
                                    Dexterity: { charState.dexterity }
                                </Typography>                              
                                <Typography>
                                    Intelligence: { charState.intelligence }
                                </Typography>                           
                                <Typography>
                                    Faith: { charState.faith }
                                </Typography>
                            </ExpansionPanelDetails>
                    </ExpansionPanel>

                )})}  
            </div>

        )
    }
}

export default compose(withStyles(styles),connect( mapStateToProps ))( SelectedChar );