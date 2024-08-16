import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { github, home } from "../../core/config/links/pages";
import Icon from "../Icon/Icon";
import AppNavLinks from "../AppNavLinks/AppNavLinks";

const AppNavbar = React.memo(() => {
  return <Navbar
    expand="sm"
    className="bg-dark navbar-dark">
    <Navbar.Brand as={Link} to={home} className="m-0 col-sm-4 col-md-5">Lucieno Zandry</Navbar.Brand>
    <Navbar.Toggle aria-controls="app-navbar" />
    <Navbar.Collapse id="app-navbar" className="justify-content-between">
      <AppNavLinks />
      <Link
        to={github}>
        <Icon
          variant="github"
          type="brands"
          size={2}></Icon></Link>
    </Navbar.Collapse>
  </Navbar>
});

export default AppNavbar;