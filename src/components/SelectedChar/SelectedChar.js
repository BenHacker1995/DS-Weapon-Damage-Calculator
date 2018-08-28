import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharEdit from '../CharEdit/CharEdit';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const mapStateToProps = ( reduxState ) => ({
    char: reduxState.wep.char,
    details: reduxState.wep.wepDetails
})

class SelectedChar extends Component {

    editPopup = ( selectedChar ) => { 
        return <CharEdit charState={ selectedChar } />
    }

    editChar = ( selectedChar ) => {
        this.editPopup( selectedChar );
        this.props.dispatch( { type: 'UPDATE_CHAR', payload: selectedChar });
        this.props.dispatch( { type: 'SELECT_CHAR', payload: selectedChar });
    }

    render() {
        return(
            <div>
            { this.props.char.map( selectedChar => {
            return (
                <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <ExpansionPanelDetails>
                                <Typography>Selected Character: { selectedChar.charname }</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Strength: { selectedChar.strength }
                            </Typography>                             
                            <Typography>
                                Dexterity: { selectedChar.dexterity }
                            </Typography>                              
                            <Typography>
                                Intelligence: { selectedChar.intelligence }
                            </Typography>                           
                            <Typography>
                                Faith: { selectedChar.faith }
                            </Typography>
                            <Typography>
                        { this.editPopup( selectedChar ) }
                            </Typography>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
    
            )})}  
            </div>

        )
    }
}

export default connect( mapStateToProps )( SelectedChar );