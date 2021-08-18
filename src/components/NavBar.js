import React from 'react'
import {Link} from 'react-router-dom'
 function NavBar() {
    return (
        <div>
            <nav>
    <div className="nav-wrapper brown">
    
    <Link to="/" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <button className="btn red" >Logout</button>
      </ul>
    </div>
  </nav>
        </div>
    )
}
export default NavBar;
