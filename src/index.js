import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ApartmentList from './components/ApartmentList'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route exact path='/apartments' component={ApartmentList} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();


// <Route exact path='/new' component={NewApartment} />
