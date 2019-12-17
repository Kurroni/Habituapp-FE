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
          <div className="logo-nav">
          <img className="logo" src={logo} alt=""/>
          <div className="username">
            <p>Username:</p>
            <p>{user.username}</p>
            
          </div>
          <button className="logout-btn"onClick={logout}>Logout</button>
          </div>
          
        ) : (
          <div className="logo-nav">
          <img className="logo" src={logo} alt=""/>
            
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
