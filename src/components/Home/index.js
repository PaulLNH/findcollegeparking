import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [apiData, setApiData] = useState("");

    useEffect(() => {
        fetch("/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setApiData(data);
            });
    }, []);

    // { "0": { "public_id": "7909ef5d-6c71-4f63-b5c1-3ed7ee875076", "first_name": "Paul", "last_name": "Laird" } }

    return (
        <div className='hero'>
            {apiData ? `Hello, ${apiData[0].first_name} ${apiData[0].last_name}!` : "Sorry... no api data"}
        </div>
    )
}

export default Home