import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <div>
            <div className='floating-button' onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </div>
            {showMenu && (
                <div className='nav-menu'>
                    <ul>
                        <Link to="/"><li className='nav-item'>Home</li></Link>
                        <Link to="/host-register"><li className='nav-item'>Host Parking</li></Link>
                        <Link to="/donate"><li className='nav-item'>Donate</li></Link>
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
                </div>
            )}
        </div>
    )
}

export default Navbar;