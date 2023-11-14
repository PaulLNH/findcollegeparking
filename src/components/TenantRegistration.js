import './TenantRegistration.css';
import Navbar from "./Navbar";

function Register() {
    return (
        <>
            <Navbar />
            <div className="FormPage">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSelBQgCmmcDFiwehyk0wHmzwx3KUYJA_7o9QjKkZUfZk4QWjg/viewform?embedded=true"
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
        </>
    );
}

export default Register;