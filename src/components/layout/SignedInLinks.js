//no state, so can be a function component not class component

import React from 'react';
import {NavLink} from 'react-router-dom';
 

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create' >New Project</NavLink></li>
            <li><NavLink to='/' >Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">YZ</NavLink></li>
        </ul>

    )
}
export default SignedInLinks;