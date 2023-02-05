import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./HomeStyle.css"


export default function NavbarComponent() {
  return (
    <div className="bg-light">
      <Navbar  expand="xxxl" className="mx-4 mb-2 navbar">
        <Navbar.Brand as={Link} to="/" >
          <div className="navbar-logo">
            <img src="./Logo.png" alt="Logo" />
            <h4 className="mt-2 font-weight-bold">RAD DRIVE</h4> 
          </div>
        </Navbar.Brand>
        <Nav className="user mt-2">
          <Nav.Link as={Link} to="/user">
            <h5>User</h5>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
