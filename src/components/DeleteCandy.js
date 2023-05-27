import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'

const DeleteCandy = () => {
    const [id, setId] = useState("");
    const [apiRespose, setApiResponse] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let key = searchParams.get("Key");

    function SkadooshCandy() {
        if (id != "") {
            fetch(`http://localhost:5000/deleteCandy/${id}?Key=${key}`, {
                method: 'DELETE',
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
        <div className='DeleteCandy'>
            <Link to={`/?Key=${key}`}>Go Back</Link>
            <div>
                <h2>Delete Candy</h2>
                <input type='text' placeholder='ID' onKeyUp={(evt) => { setId(evt.target.value) }} />
                <button onClick={() => { SkadooshCandy(); }}>Skadoosh!</button>
                <br />
            </div>
            <div>{apiRespose}</div>
        </div>
    )
}

export default DeleteCandy