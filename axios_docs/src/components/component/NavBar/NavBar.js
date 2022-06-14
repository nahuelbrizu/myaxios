import React from "react"
import {Nav, Navbar , Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import {IconButton} from "@mui/material";

const NavBar = () => {
  return(
      <React.Fragment>
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container" >
            <Link to={"/"} className="navbar" >
                <IconButton color="primary" className="me-auto">Free Food</IconButton></Link>
                <Nav className="me-auto">
                    <Link to="/Lista" className="nav-link" >Users</Link>
                    <Link to="/App" className="nav-link">Recipes</Link>

                </Nav>
        </div>
    </Navbar>
      </React.Fragment>
  )
}

export default NavBar;