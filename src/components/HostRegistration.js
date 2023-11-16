import './HostRegistration.css';
import Navbar from "./Navbar";

function Register() {
    return (
        <fragment className="host-registration">
            <Navbar />
            <div className="FormPage">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeWHtG9l24kHnf2pFM75Iv65A7-1dgui8slOsBcQLPo_WI1Tg/viewform?embedded=true"
                    height="1900"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="Find College Parking Form"
                    id="FCPForm"
                >
                    Loading…
                </iframe>
            </div>
        </fragment>
    );
}

export default Register;