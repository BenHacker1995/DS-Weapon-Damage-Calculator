import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CharList from '../CharList/CharList';

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

const Nav = ( props ) => {
//   <div className="navbar">
//     <div>
//       <ul>
//         <li>
//           <Link to="/char/create">
//             Create a Character
//           </Link>
//         </li>
//         <li>
//           <Link to="/char/list">
//             Your Characters
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// );
const { classes } = props;
  return (
    
    <div className={classes.root}>
    <AppBar position="static">
      <Tabs>
      <ExpansionPanel>
        {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
          <ExpansionPanelSummary>
          <Typography className={classes.heading}>Characters</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Create a Character
          </Typography>
          <Link to="/char/create" />
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          {/* <Link to="/char/list" /> */}
          <Typography>
            {/* Your Characters */}
            <Link to={ CharList }>Your Characters</Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Tabs>
        </AppBar>
    </div>
  )    
}

export default withStyles(styles)(Nav);
