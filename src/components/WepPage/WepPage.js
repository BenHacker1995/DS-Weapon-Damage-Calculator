import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from '../Header/Header';
import SelectedChar from '../SelectedChar/SelectedChar';
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
    user: reduxState.user,
    char: reduxState.wep.char,
    details: reduxState.wep.wepDetails,
})

class WepPage extends Component {

    state = {
        char: this.props.char
    }

    // componentDidMount() {
    //     this.fetchDetails();
    // }

    // fetchDetails = () => {
    //     this.props.dispatch({ type: 'FETCH_WEP_DETAIL',
    //     payload: { id: this.props.wep.id, char: this.props.char }});
    // }

    render() {
        return(
            <div>
                <Header history={this.props.history} />
                <div>
                    <SelectedChar />
                </div>
                <div>
                    <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ExpansionPanelDetails>
                                    <Typography>{ this.props.details.wepname }</Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>Total Damage: { this.props.details.totaldmg }</Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>Physical Damage: { this.props.details.physdmg }</Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>Magic Damage: { this.props.details.magicdmg }</Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>Fire Damage: { this.props.details.firedmg }</Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>Lightning Damage: { this.props.details.ltngdmg }</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Strength Scaling: { this.props.details.strscale }
                                </Typography>                             
                                <Typography>
                                    Dexterity Scaling: { this.props.details.dexscale }
                                </Typography>                              
                                <Typography>
                                    Intelligence Scaling: { this.props.details.intscale }
                                </Typography>                           
                                <Typography>
                                    Faith Scaling: { this.props.details.faithscale }
                                </Typography>
                            </ExpansionPanelDetails>
                    </ExpansionPanel> 
                </div>
            </div>
        )
    }
}

export default compose( withStyles( styles ), connect( mapStateToProps ))( WepPage );     