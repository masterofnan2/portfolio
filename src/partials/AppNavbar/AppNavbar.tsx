import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { github, home } from "../../core/config/links/pages";
import Icon from "../Icon/Icon";
import AppNavLinks from "../AppNavLinks/AppNavLinks";
import { useNavbar } from "../../App/options/hooks";

const themes = {
  'home': 'dark',
  'about': 'primary',
  'work': 'dark',
  'technologies': 'warning',
  'technologies2': 'light',
  'technologies3': 'secondary',
  'contact': 'dark'
}

const AppNavbar = React.memo(() => {
  const active = useNavbar().active as keyof typeof themes;

  const theme = themes[active];

  const navtype = React.useMemo(() => {
    switch (theme) {
      case 'light':
        return 'navbar-light bg-light';

      case 'dark':
        return 'navbar-dark bg-dark';

      case undefined:
        return 'navbar-dark bg-dark';

      default:
        return `navbar-dark bg-${theme}`;
    }
  }, [active]);

  return <Navbar
    expand="sm"
    className={`app-navbar ${navtype} px-md-5 px-3 w-100`}>
    <Navbar.Brand as={Link} to={home} className={`m-0 col-sm-4 col-lg-3 ${theme !== 'dark' ? 'text-dark' : 'text-light'}`}>Lucieno Zandry</Navbar.Brand>
    <Navbar.Toggle aria-controls="app-navbar-collapse" />
    <Navbar.Collapse id="app-navbar-collapse" className={`justify-content-between ${theme !== 'light' && 'bg-dark'} rounded mt-4`}>
      <AppNavLinks />
      <Link
        to={github}>
        <Icon
          variant="github"
          type="brands"
          size={2}
          className="me-3"></Icon></Link>
    </Navbar.Collapse>
  </Navbar>
});

export default AppNavbar;