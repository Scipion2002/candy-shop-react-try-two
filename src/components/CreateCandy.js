import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'

const CreateCandy = () => {
  const [name, setName] = useState("");
  const [wrapColor, setWrapColor] = useState("");
  const [flavor, setFlavor] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [apiRespose, setApiResponse] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let key = searchParams.get("Key");

  function MakeCandy() {
    if (name != "" && wrapColor != "" && flavor != "" && amount != "" && type != "") {
      let data = { Name: name, WrapColor: wrapColor, Flavor: flavor, Amount: amount, Type: type }
      fetch(`http://localhost:5000/createCandy?Key=${key}`, {
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
    <div className='CreateCandy'>
      <Link to={`/?Key=${key}`}>Go Back</Link>
      <div>
        <h2>Create Candy</h2>
        <input type='text' placeholder='Name' onKeyUp={(evt) => { setName(evt.target.value) }} />
        <input type='text' placeholder='Wrap Color' onKeyUp={(evt) => { setWrapColor(evt.target.value) }} />
        <input type='text' placeholder='Flavor' onKeyUp={(evt) => { setFlavor(evt.target.value) }} />
        <input type='text' placeholder='Amount' onKeyUp={(evt) => { setAmount(evt.target.value) }} />
        <input type='text' placeholder='Type' onKeyUp={(evt) => { setType(evt.target.value) }} />
        <button onClick={() => { MakeCandy(); }}>Create!</button>
        <br />
      </div>
      <div>{apiRespose}</div>
    </div>
  )
}

export default CreateCandy