import './TenantRegistration.css';
import Navbar from "./Navbar";

function TenantRegistration() {
    return (
        <fragment className="tenant-registration">
            <Navbar />
            <div className="FormPage">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdWqfPdGwjC7QPVYTl77IbcUANxS2iYeo1QEbyuszBq2bjWYg/viewform?embedded=true"
                    height="2900"
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

export default TenantRegistration;