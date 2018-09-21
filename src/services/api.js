export default class Api {
	constructor(domain) {
		this.domain = domain || 'http://localhost:3000'
	}

  getApartments = () => {
    return fetch(`${this.domain}/apartments`)
    .then(resp=>{
      let json = resp.json()
      console.log(json)
      return json
    })
  }
	createApartment = (apartment) => {
		console.log(JSON.stringify(apartment))
		return fetch(`${this.domain}/apartments`,{
			method: "POST",
			headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'},
			body: JSON.stringify(apartment)
		})
		.then(resp=>{
			return resp.json()
		})
	}
}
