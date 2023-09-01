import React from "react";
import { Link } from "react-router-dom";

const NavbarRoute = () => {
   
        return(
            <div>
            <nav className="navbar bg-success fixed-top">
                <div className="container">
                <Link className="navbar-brand" to="#">
                    <h4 className="text-light">Andri Suryono</h4>
                </Link>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="HomeRoute">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/AboutRoute">
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/ProjectRoute">
                            Project Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/ContactRoute">
                            Contact Me
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }

    export default NavbarRoute;