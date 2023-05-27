import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Candies = () => {
  // Ask the API for the Candy
  // Display a list of all candy from our API=>DB
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/allCandy`)
      .then(res => res.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div className='Candies'>
        <ul>
          {data.map(candy => (
            <>
            <Link key={candy._id} to={`/candy/${candy._id}`}>{candy._id}</Link>
            <ul>Name: {candy.Name}</ul>
            </>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className='Candies'>No Candies</div>
  )
}

export default Candies