//no state, so can be a function component not class component

import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

// these two signin and signout components will show under some logic authentication
const Navbar = (props) => {
    // console.log('props in navbar:',props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/>:<SignedOutLinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Dashboard</Link>
                { links }
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);