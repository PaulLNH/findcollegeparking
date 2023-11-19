import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <div className='navbar'>
            <div className='logo'>
                <FaMapMarkerAlt id="logo" />
            </div>
            <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/"><li className='nav-item'>Home</li></Link>
                <Link to="/tenant-register"><li className='nav-item'>Find Parking</li></Link>
                <Link to="/host-register"><li className='nav-item'>Host Parking</li></Link>
                <Link
                    to="#"
                    onClick={(e) => {
                        window.location.href = "mailto:info@findcollegeparking.com?subject=FindCollegeParking.com"
                        e.preventDefault();
                    }}
                >
                    <li className='nav-item'>Contact</li>
                </Link>
            </ul>
            <div className='hamburger' onClick={toggleMenu}>
                {showMenu ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
        </div>
    )
}

export default Navbar