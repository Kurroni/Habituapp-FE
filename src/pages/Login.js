import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { username: '', password: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
      <Link to="/signup">
        {' '}
        <button className="signup-btn">Signup</button>{' '}
      </Link>
      <div className="login-wrapper">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />

          <input id="login-btn" type="submit" value="Login" />
        </form>
        <div className="signup-link">
        <p>No account?</p>
        <Link to={'/signup'}> Sign Up</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default withAuth(Login);
