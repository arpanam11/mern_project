import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">

    <div className="container-fluid">
     
      <ul className="navbar-nav">
        <li className="nav-item">
          <h2><Link className="nav-link text-info" to="/"><b>GOFOOD</b></Link></h2>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-3" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-3" to="/">About</Link>
        </li>
      </ul>
      <div classNamename="d-flex">
      <Link className="nav-link bg-success p-2 rounded-2 text-white" to="/login">Login</Link>
      </div>
    </div>
  
  </nav>
  )
}

export default Navbar