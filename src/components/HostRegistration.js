import './HostRegistration.css';
import Navbar from "./shared/Navbar";

function Register() {
    return (
        <fragment className="host-registration">
            <Navbar />
            <div className="FormPage">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeWHtG9l24kHnf2pFM75Iv65A7-1dgui8slOsBcQLPo_WI1Tg/viewform?embedded=true"
                    height="3200"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
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