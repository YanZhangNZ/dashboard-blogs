import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedIn'
import SignedOutLinks from './SignedOut'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Dashboard
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}   

export default Navbar;