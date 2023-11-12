import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <h1>Find College Parking</h1>
        <p>Your Resource For Off-Campus Parking</p>
        <Link to="/register">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      {/* Features section with placeholder icons */}
      <section className="features">
        <div className="feature">
          <div className="icon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <p>Convenient Parking</p>
        </div>
        <div className="feature">
          <div className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p>Easy Navigation</p>
        </div>
        {/* Add more feature elements here */}
      </section>

      {/* Additional content and CTAs */}
      <section className="additional-content">
        <p>
          Learn more about how we can make your college parking experience
          better.
        </p>
        <Link to="/register">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
