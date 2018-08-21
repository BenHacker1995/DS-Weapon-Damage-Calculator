import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
  charList: state.wep.charList
});

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/char');
    }
  }

  login = () => {

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  getChars = ( event ) => {
    this.login();
    this.props.dispatch({ type: 'FETCH_CHARS', payload: this.state.username });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        { this.renderAlert() }
        <Paper className='paper'>
          <h1>Login</h1>
          <div>
              <TextField
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <div>
              <TextField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div>
          <div>
            <Button
              name="submit"
              value="Log In"
              onClick={ this.getChars }
            >
              Log In
            </Button>
            <Button>
            <Link to="/register">Register</Link>
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
