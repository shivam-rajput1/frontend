import React from 'react';
import { Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
        <ul className='Nav-ul'>

            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">update Product</Link></li>
            <li><Link to="/logout">logout</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to= "/signup">Sign Up</Link></li>
        </ul>
    </div>
    )
    
}

export default Nav;