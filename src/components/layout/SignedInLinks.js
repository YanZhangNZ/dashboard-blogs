//no state, so can be a function component not class component

import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create' >New Project</NavLink></li>
            <li><a href="/">Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">YZ</NavLink></li>
        </ul>

    )
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         signOut: () => dispatch(signOut())
//     }
// }

// export default connect(null,mapDispatchToProps)(SignedInLinks);

export default SignedInLinks;