import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import SignupBackground from './../img/Success.jpg'

class Signup extends Component {
  state = { username: '', email:'', password: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, email, password }); // props.signup is Provided by withAuth() and Context API
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <Link to="/login">
          {' '}
          <button className="login-btn">Login</button>{' '}
        </Link>
        <div className="signup-wrapper">
         <h1>Join and start your new habit</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            maxLength="12"
            value={username}
            onChange={this.handleChange}
            />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />

          <input id="signup-btn" type="submit" value="Signup" />
        </form>
        <div className="login-link">
        <p>Already have an account?</p>
        <Link to={'/login'}>Login</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default withAuth(Signup);
