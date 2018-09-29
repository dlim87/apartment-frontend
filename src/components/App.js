import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import ApartmentList from './ApartmentList'
import CreateApartment from './CreateApartment'
import Apartment from './Apartment'
import Header from './Header'
import AuthService from '../services/AuthService'

class App extends Component {
  render() {
    let auth = new AuthService()
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={ApartmentList} />
          <Route path="/apartments/:id" component={Apartment} />
          <Route exact path='/apartments' component={ApartmentList} />
          {(auth.loggedIn())?
            <Route exact path='/apartments/new' component={CreateApartment} />:
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>}
        </div>
      </Router>
    );
  }
}

export default App;
