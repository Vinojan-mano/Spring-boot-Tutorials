import './App.css';
import React from 'react'
import { useState } from 'react';
function CreateApp() {
 const [fname, setName] = useState('');
 const [email, setEmail] = useState('');
 const [lname, setLname] = useState('');
function saveData()
{
  let data={fname,email,lname}
// console.warn(data);
  fetch("http://localhost:8080/api/employees", {
    // credentials: 'include' ,
    method: "POST",
    // mode:'no-cors',

    headers: {
      'Content-Type': 'application/json',Accept: 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      // 'Accept': 'application/json',
      
  
// 'Access-Control-Allow-Origin ':'*',
// 'Access-Control-Allow-Methods':'POST',
// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    });
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="firstname" value={fname} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="lastname"  value={lname} onChange={(e)=>{setLname(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default CreateApp;