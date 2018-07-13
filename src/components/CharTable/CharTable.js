import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CharEdit from '../CharEdit/CharEdit';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const mapStateToProps = ( reduxState ) => ({
    user: reduxState.user,
    charList: reduxState.char.charList
})

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 1020,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });
  

class CharTable extends Component {

    render() {
  
      return (
          <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Character
                        </TableCell>
                         <TableCell>
                            Edit
                        </TableCell>
                        <TableCell>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                { this.props.charList.map( char => {
                return (

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    { char.charname }
                                </TableCell>
                                <TableCell>
                                <IconButton aria-label="Edit"
                                onClick={ this.props.updateChar }>
                                    <EditIcon />
                                    <CharEdit id={ char.id } charState={ this.props.charState }
                                    open={ this.props.open }
                                    handleOpen={ () => this.props.handleOpen( char.id ) }
                                    close={ this.props.close }
                                    handleChange={ this.props.handleChange }
                                    updateChar={ this.props.updateChar }/>
                                </IconButton>
                                </TableCell>
                                <TableCell>
                                <IconButton aria-label="Delete"
                                onClick={ this.props.deleteChar }>
                                    <DeleteIcon />
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )
                })}
            </Table>
        </div>
      );
    }
  }

  export default compose(withStyles(styles),connect( mapStateToProps ))( CharTable );