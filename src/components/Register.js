import React, { Component } from 'react';
import '../css/Register.css';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService';

class Register extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      success: false,
      errors:"",
      form:{
        user:{
          name:'',
          email: '',
          password: ''
          }
        }
    }
  }
  render(){
    let {name, email,password} = this.state.form.user
    return(
      <div className="center">
        <div className="card">
          <h1>Register</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="name goes here..."
              name="name"
              type="text"
              onChange={this.handleChange}
              value={name}
            />
            <input
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange}
              value={email}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
              value={password}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
          {this.state.success && <Redirect to="/" />}
        </div>
      </div>
    )
  }
  handleChange=(e)=>{
    let {user} = this.state.form
    // copy event target name and value (target will be a form field)
    let fieldName = e.target.name
    let inputValue = e.target.value
    console.log(inputValue, fieldName);
    // update form object with new value from user
    user[fieldName] = inputValue
    this.setState({user})
  }


  handleFormSubmit = (e)=>{
    e.preventDefault()
    console.log(e);
    this.Auth.register(this.state.form)
    .then(json => {
       console.log("handling any errors");
       if(json.errors) {
         this.setState({errors: json.errors})
       }
       return json
     })
     .then(resp => {
        if(this.Auth.loggedIn()) this.setState({success: true})
     })
  }
}
export default Register
