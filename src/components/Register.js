import { FormControl } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [apiRespose, setApiResponse] = useState([]);

  function CreateUser() {
    if (username != "" && password != "" && email != "") {
      let data = { Username: username, Password: password, Email: email }
      fetch('http://localhost:5000/createUser', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resp => resp.json())
      .then(data => {
        setApiResponse(data.Message);

      }).catch(err => err);
    }
  };

  return (
    <div className='Register'>
    <div>
      <h2>Register</h2>
      <input type='text' placeholder='New Username' onKeyUp={(evt) => { setUsername(evt.target.value) }} />
      <input type='text' placeholder='New Password' onKeyUp={(evt) => { setPassword(evt.target.value) }} />
      <input type='text' placeholder='New Email' onKeyUp={(evt) => { setEmail(evt.target.value) }} />
      <button onClick={() => { CreateUser(); }}>Register</button>
    </div>
    <div>{apiRespose}</div>
    </div>
  )
}

export default Register