import './TenantRegistration.css';
import Navbar from "./Navbar";

function Register() {
    return (
        <fragment className="tenant-registration">
            <Navbar />
            <div className="FormPage">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdWqfPdGwjC7QPVYTl77IbcUANxS2iYeo1QEbyuszBq2bjWYg/viewform?embedded=true"
                    height="2900"
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