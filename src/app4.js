import React, { Component } from 'react'
import axios from 'axios'
// const express=require('express')
// const app=express()
// const cors = require('cors');
// app.use(express.json());
// app.use(cors());
	
class PostForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			firstName:'',
			lastName:'',
			eMailAddress:''
		}
	}
	

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	
	submitHandler = e => {
	
        
		e.preventDefault()
		console.log(this.state)
		
		axios 
			.post('http://localhost:8080/api/employees', this.state,{
headers :{'Content-Type': 'application/json',
// Accept: 'application/json',
// 'Access-Control-Allow-Origin ':'*',
// 'Access-Control-Allow-Methods':'POST',
}
// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

			}
			)


			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
// axios(
// {
// 	url:'http://localhost:8080/api/employees',
// 	withCredentials:false,
// 	data:this.state,
// 	method:"POST",
// 	mode: 'no-cors',
// 	headers:{
// 		"Content-Type": "application/json",
// 		'Access-Control-Allow-Origin': '*',
// 		"Access-Control-Request-Headers": 'Content-Type, Authorization'

// 	}
// })
// .then(res => {
// 	console.log(res);
// })
// .catch(err =>{
// 	console.log(err);
// })
	}

	render() {
		const { fName, lName, eMail } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="firstName"
							value={fName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="lastName"
							value={lName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="eMailAddress"
							value={eMail}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm;