import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TabsBar = () => (
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
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Weapons</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <Link to="/weps">Weapon Categories</Link>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </Tabs>
</AppBar>
</div>
)

export default TabsBar;