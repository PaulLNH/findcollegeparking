import React, { useEffect } from 'react';
import './Map.css';

function Map() {
    useEffect(() => {
        // Add the class to the body when the component mounts
        document.body.classList.add('homepage');

        // Remove the class from the body when the component unmounts
        return () => {
            document.body.classList.remove('homepage');
        };
    }, []);

    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/d/u/3/embed?mid=1hLSMlnfBjDCZfcG24lCtvB379JuDZZ8&ehbc=2E312F"
                className="dynamic-height-iframe"
                width="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Find a College Parking Spot"
                id="map"
            >
                Loading…
            </iframe>
        </div>
    );
}

export default Map;