import { useState } from "react";

const Create = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {firstName,lastName,emailId};
    fetch('http://localhost:8080/api/employees', {
      // credentials: 'include' ,
    method: "POST",
      // mode: "no-cors",
      // method: 'post',
      headers: {'Accept': 'application/json',"Content-Type": "application/json"},
      body: JSON.stringify(blog),
     
    }).then(() => {
      // console.blog();
      console.log(blog)
      console.log('new blog added');
    }).catch((err)=>{
      console.log(err.message);
    }
    )
  }
  return (
    <div className="create">
      <h2>Add a user</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label><br></br>
        <input 
          type="text" 
          required 
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <br></br>
        <label>Lastname:</label><br></br>
        <input 
          required
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <br></br>
        <label>EmailId:</label><br></br>
        <input 
          type="text" 
          required 
          value={emailId}
          onChange={(e) => setemailId(e.target.value)}
        />
        <br></br>
        {/* <label>Blog author:</label><br></br>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        <br></br>
        <button>Save</button>
        <br></br><p></p>
      </form>
    </div>
  );
}
 
export default Create;