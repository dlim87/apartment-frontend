import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService';
import Api from '../services/api'
import '../css/CreateApartment.css'

class CreateApartment extends Component{
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.api = new Api()
    this.state={
      success:false,
      form:{
      apartment:{
        address_1:"",
        address_2:"",
        city:"",
        post_code:"",
        state:"",
        country:"",
        manager_name:"",
        manager_number:"",
        manager_time:"",
        user_id:this.auth.getUserId()
      }
    }
    }
  }

  handleChange = (e) => {
    let {apartment} = this.state.form
    // copy event target name and value (target will be a form field)
    let fieldName = e.target.name
    let inputValue = e.target.value
    console.log(inputValue, fieldName);
    console.log(apartment);
    // update form object with new value from user
    apartment[fieldName] = inputValue
    this.setState({apartment})
  }
  render(){
    console.log(this.auth.loggedIn(),this.state.form.apartment.user_id)
    let {address_1,address_2,city,post_code,state,country,manager_name,manager_time,manager_number}=this.state.form.apartment
    return(
      <div className="center">
        <div className="card">
        <h1>New Apartment:</h1>
      <form onSubmit={this.handleFormSubmit}>
        <input className="form-item"
        placeholder="address 1" name="address_1" type="text" onChange={this.handleChange} value={address_1}/>
        <input className="form-item"
        placeholder="address 2" name="address_2" type="text" onChange={this.handleChange} value={address_2}/>
        <input className="form-item"
        placeholder="city" name="city" type="text" onChange={this.handleChange} value={city}/>
        <input className="form-item"
        placeholder="zip code" name="post_code" type="number" onChange={this.handleChange} value={post_code}/>
        <input className="form-item"
        placeholder="state" name="state" type="text" onChange={this.handleChange} value={state}/>
        <input className="form-item"
        placeholder="country" name="country" type="text" onChange={this.handleChange} value={country}/>
        <input className="form-item"
        placeholder="manager name" name="manager_name" type="text" onChange={this.handleChange} value={manager_name}/>
        <input className="form-item"
        placeholder="manager phone" name="manager_number" type="number" onChange={this.handleChange} value={manager_number}/>
        <input className="form-item"
        placeholder="mananger availability" name="manager_time" type="text" onChange={this.handleChange} value={manager_time}/>
        <input className="form-submit" value="SUBMIT" type="submit" />
      </form>
      {(!this.auth.loggedIn()||this.state.success) &&<Redirect to="/apartments"/>}
        </div>
      </div>
    )
  }


  //
  handleFormSubmit = (e)=>{
    e.preventDefault()
    console.log(e);
    this.api.createApartment(this.state.form)
    .then(json => {
       console.log("handling any errors");
       if(json.errors) {
         this.setState({errors: json.errors})
       }
       return json
     })
     .then(resp => {
        this.setState({success:true})
     })
  }
}
export default CreateApartment
