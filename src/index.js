import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ApartmentList from './components/ApartmentList'
import CreateApartment from './components/CreateApartment'
import Apartment from './components/Apartment'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ApartmentList} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path="/apartments/:id" component={Apartment} />
      <Route exact path='/apartments' component={ApartmentList} />
      <Route exact path='/new' component={CreateApartment} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();


// <Route exact path='/new' component={NewApartment} />
