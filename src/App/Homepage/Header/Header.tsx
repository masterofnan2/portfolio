import React from "react";
import photo from "./photo.jpg";
import { Link } from "react-router-dom";
import { home } from "../../../core/config/links/pages";

const Header = React.memo(() => {
    return <header className="d-flex justify-content-between align-items-center header">
        <div className="col-5">
            <p>Hello, I am Lucieno,</p>
            <h1 className="display-1 text-primary">
                Full stack <br />
                Developer
            </h1>
            <Link to={home} className="text-light">Contact me</Link>
        </div>
        <div className="col-5">
            <img
                src={photo}
                className="img-responsive rounded" />
        </div>
    </header>
});

export default Header;