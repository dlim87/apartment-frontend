import React, {Component} from 'react'
import Api from '../services/api'
// import '../css/ApartmentList.css'
import AuthService from '../services/AuthService'

class Apartment extends Component {
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
    console.log(this.props.match.url.substring(this.props.match.url.lastIndexOf('/')+1))
    // console.log(this.state.userid);
    return(
      <div className="apartment">
      This is an apartment!
      </div>
    )
  }
}
export default Apartment
