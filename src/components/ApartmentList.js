import React, {Component} from 'react'
import Api from '../services/api'
import '../css/ApartmentList.css'
import AuthService from '../services/AuthService'

class ApartmentList extends Component {
  constructor(props){
    super(props)
    this.api = new Api()
    this.auth= new AuthService()
    this.state = {
      userid:null,
      apartments: []
    }
  }
  componentWillMount(){
    this.api.getApartments()
    .then(resp => {
      this.setState({apartments:resp})
    })
    if(this.auth.loggedIn()){
      let uid=this.auth.getUserId()
      this.setState({userid:uid})
    }
  }
  render(){
    console.log(this.state.userid);
    return(
      <div className="apartmentList">
      {this.state.apartments.map((apartment,index)=>{
        return (<div className="apartmentCard" key={apartment.id}>
          <p>{apartment.address_1}</p>
          <p>{apartment.address_2}</p>
          <p>{apartment.city}, {apartment.state} {apartment.post_code}</p>
          <p>{apartment.manager_name}<br/>
            {apartment.manager_number}-{apartment.manager_time}</p>
            {(apartment.user_id==this.state.userid)? <p>✎edit</p>: <p></p>}
          </div>
        )
      })}
    </div>
    )
  }
}
export default ApartmentList
