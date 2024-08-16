import React from "react";
import { Nav, NavLinkProps } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";

type Props = {
    href: string,
    title: string,
    icon: string,
} & NavLinkProps

const AppNavlink = React.memo((props: Props) => {
    const { href, title, icon, className = '', ...navlinkProps } = props;

    const { pathname } = useLocation();
    const isActive = React.useMemo(() => pathname === href, [pathname, href]);

    return <Nav.Link
        as={Link}
        to={href}
        active={isActive}
        className={`app-nav-link ${className}`}
        {...navlinkProps}><Icon variant={icon} type={isActive ? 'solid' : 'thin'} /> {title}
    </Nav.Link>
});

export default AppNavlink;