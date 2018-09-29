import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthService from '../services/AuthService'

class Header extends Component {
  render(){
    let auth= new AuthService()
    return(
      <div>
      <Link to="/apartments">Apartments</Link>
      {auth.loggedIn()?
      <div>
        <Link to="/apartments/new">Create a new Apartment</Link>
      </div>:
      <div>
        <Link to="/login">Log in</Link>
        <Link to="/register">register</Link>
      </div>}
      </div>
    )
  }
}
export default Header
