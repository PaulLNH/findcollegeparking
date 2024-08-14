import './Map.css';
// import Navbar from "../shared/Navbar";

function Map() {
    return (
        <fragment className="map">
            <div className="FormPage">
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
        </fragment>
    );
}

export default Map;