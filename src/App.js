import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import Navbar from './components/Navbar';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import AddHabit from './pages/Add-habit';
import Showhabits from './pages/Today';
import EditHabit from './pages/Edit-habit';
import SingleHabit from './pages/Single-habit';

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/add-habit" component={AddHabit}/>
          <PrivateRoute exact path="/today" component={Showhabits}/>
          <PrivateRoute exact path="/edit-habit/:id" component={EditHabit}/>
          <PrivateRoute exact path="/single-habit/:id" component={SingleHabit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
