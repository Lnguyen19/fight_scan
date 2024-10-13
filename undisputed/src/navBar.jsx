import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './navBar.css'

const NavBar = ()=>{

return(<>
<div className="nav">
      <img src='https://res.cloudinary.com/dubn3gtxd/image/upload/v1718429643/t7sjfcqvhx7qmv6bmirp.png' alt="Logo" className="nav_logo" />
      <div className="nav_links">
        <a className="nav-link" >Home</a>
        <a className="nav-link" >Add</a>
        <a className="nav-link" >QR Code</a>
        <a className="nav-link" >Schedule</a>
        <a className="nav-link">Support</a>
      
      </div>
    
     
    </div>

	</>)
}
export default NavBar