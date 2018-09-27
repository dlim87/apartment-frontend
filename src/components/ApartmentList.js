import React, {Component} from 'react'
import Api from '../services/api'
import '../css/ApartmentList.css'
import AuthService from '../services/AuthService'
import ApartmentCard from './ApartmentCard'

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
      {this.state.apartments.map((e,index)=>{
        return ( <ApartmentCard apartment={e} userid={this.state.userid} key={e.id}/>
        )
      })}
    </div>
    )
  }
}
export default ApartmentList
