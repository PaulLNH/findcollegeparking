import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

function Register() {
  return (
    <div className="FormPage">
      <Link to="/"> {/* Navigate back to the landing page */}
        <button className="return-button">
        <FontAwesomeIcon icon={faHouse} style={{color: "white",}} /> Return Home
        </button>
      </Link>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSelBQgCmmcDFiwehyk0wHmzwx3KUYJA_7o9QjKkZUfZk4QWjg/viewform?embedded=true"
        height="1900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Find College Parking Form"
        id="FCPForm"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Register;