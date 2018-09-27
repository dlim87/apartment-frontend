import React, { Component } from 'react'
class ApartmentCard extends Component{
  render(){
    let {apartment}=this.props
    return(
      <div className="apartmentCard" key={apartment.id}>
        <p>{apartment.address_1}</p>
        <p>{apartment.address_2}</p>
        <p>{apartment.city}, {apartment.state} {apartment.post_code}</p>
        <p>{apartment.manager_name}<br/>
        {apartment.manager_number}-{apartment.manager_time}</p>
        {(apartment.user_id===this.props.userid)? <div className="loggedInFunctions">
        <p>✎edit</p>
        <p>X delete</p>
        </div>: <p></p>}
        </div>
    )
  }
}
export default ApartmentCard
