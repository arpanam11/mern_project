import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm">

    <div class="container-fluid">
     
      <ul class="navbar-nav">
        <li class="nav-item">
          <h3><Link class="nav-link text-info" to="/">GOFOOD</Link></h3>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">About</Link>
        </li>
       
      </ul>
      <div classname="d-flex">
      <Link class="nav-link bg-success p-2 rounded-2 text-white" to="/login">Login</Link>
      </div>
    </div>
  
  </nav>
  )
}

export default Navbar