import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import logo from "./../img/logo_200x200.png"

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="nav-wrapper">

      
        {isLoggedin ? (
          <div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="logo-nav">
          <img className="logo" src={logo} alt=""/>
            <Link to="/login">
              {' '}
              <button className="login-btn">Login</button>{' '}
            </Link>
            {/* <br /> */}
            {/* <Link to="/signup">
              {' '}
              <button>Signup</button>{' '}
            </Link> */}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
