import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Find College Parking</h1>
                        <h1><span className='primary-color'>Durham, NH</span></h1>
                        <p>Discover stress-free parking with Find College Parking. Your ideal spot is just a click away – we connect students with available off-campus parking spaces, making your campus life easier. Click "Find Parking Now" below to register, outline your preferences, and be added the waitlist. We'll reach out when an available space based on your criteria is available!</p>
                        <div className='used-by'>
                            <Link to="/tenant-register">
                                <button className="cta-button">Find Parking Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className="form-layout">
                            <img src={Logo} alt='logo' width="400px" id="hero-map" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero