import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Candy = () => {
  let { candyId } = useParams();
  const [candy, setCandy] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/candy/${candyId}`)
      .then(res => res.json())
      .then(setCandy);
  }, []);

  if (candy) {
    return (
      <div className='Candy'>
        <ul key={candy._id}>
          <div>Name: {candy.Name}</div>
          <div>Wrap Color: {candy.WrapColor}</div>
          <div>Flavor: {candy.Flavor}</div>
          <div>Amount: {candy.Amount}</div>
          <div>Type: {candy.Type}</div>
        </ul>
      </div>
    )
  }

  return (
    <div className='Candy'>Candy not found!</div>
  )
}

export default Candy