import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let key = searchParams.get("Key");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState([]);

  
  useEffect(() => {
    if(key != null){
    setApiKey(key);
  }
  }, []);

  function Login() {
    if (username != "" && password != "") {
      let data = { Username: username, Password: password }
      fetch('http://localhost:5000/getKey', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          setApiKey(data.Message);

        }).catch(err => err);
    }
  }

  return (
    <div className='Login'>
      <div>
        <h2>Login</h2>
        <input type='text' placeholder='New Username' onKeyUp={(evt) => { setUsername(evt.target.value) }} />
        <input type='text' placeholder='New Password' onKeyUp={(evt) => { setPassword(evt.target.value) }} />
        <button onClick={() => { Login(); }}>Login</button>
        <br />
      </div>

      {
        apiKey != "" &&
        <>
          <div>Logged in! Check our create, update and delete methods for candy!</div>
          <br/>
          <div>Create</div>
          <br/>
          <Link to={`/createCandy/?Key=${apiKey}`}>Click Here to Create candies!</Link>
          <br/>
          <div>Edit</div>
          <br/>
          <Link to={`/updateCandy/?Key=${apiKey}`}>Click Here to Update candy!</Link>
          <br/>
          <div>Delete</div>
          <br/>
          <Link to={`/deleteCandy/?Key=${apiKey}`}>Click Here to Skadoosh candy!</Link>
        </>
      }
    </div>
  )
}

export default Login