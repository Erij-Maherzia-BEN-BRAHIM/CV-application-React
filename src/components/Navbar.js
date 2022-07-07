import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-dark">CV</Link></li>
          <li><Link to="/addNew" className="nav-link px-2 link-dark">Add CV</Link></li>
          <li><Link to="/login" className="nav-link px-2 link-dark">Login</Link></li>
          <li><Link to="/logout" className="nav-link px-2 link-dark">Logout</Link></li>
        </ul>

      </div>
    </div>
  </header>
    </div>
  )
}
