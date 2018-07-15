import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
import { Link } from 'react-router-dom';
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

class TabsBar extends Component {
    state = {
      selectedTab: 'shop-setup'
    }
  
    handleTabClick = (event, value) => {
      this.setState({selectedTab: value});
    }

    render() {
        return(
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
                        <ExpansionPanelDetails>
                            <Typography>
                                <Link to="/char/list">Your Characters</Link>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Tabs>
            </AppBar>
    </div>

        )
    }
  }
  export default withStyles(styles)(TabsBar);