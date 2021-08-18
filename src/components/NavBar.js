import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';
import {history} from 'react-router-dom'
 function NavBar(user) {
   const history=useHistory() //for logout button
    return (
        <div>
            <nav>
    <div className="nav-wrapper brown">
    
    <Link to="/" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right ">
      {
        user? //if login
        <li>  <button className="btn red" onClick ={()=>{
          auth.signOut()
          history.push('/Login') //if click on button push to login page
        }}>Logout</button></li>
          : //not login
          <div>  <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li></div>
      }
      
        
      </ul>
    </div>
  </nav>
        </div>
    )
}
export default NavBar;
