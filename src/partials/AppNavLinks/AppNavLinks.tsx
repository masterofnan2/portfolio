import React from "react";
import { Nav } from "react-bootstrap";
import AppNavlink from "../AppNavLink/AppNavLink";
import { about, home, work } from "../../core/config/links/pages";

const navLinks = [
    {
      title: 'Home',
      href: home,
      icon: "home",
    },
    {
      title: 'About',
      href: about,
      icon: "book",
    },
    {
      title: 'Work',
      href: work,
      icon: "briefcase",
    },
  ];

const AppNavLinks = React.memo(() => {
    return <Nav className="mr-auto">
    {navLinks.map((navLink, key) => <AppNavlink
      key={key}
      {...navLink} />)}
  </Nav>
});

export default AppNavLinks;