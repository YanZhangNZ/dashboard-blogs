//no state, so can be a function component not class component

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

// these two signin and signout components will show under some logic authentication
const Navbar =(props) => {

        const { auth, profile } = props;
        const links = auth.uid ? <SignedInLinks profile={profile}/>:<SignedOutLinks />
    return(
        <div>
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to="/" className="brand-logo" style={{left:'60px',fontSize:'22px'}}>Blogging</Link>
                { links }
            </div>     
        </nav>
        </div>
    )
}
           
 
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);