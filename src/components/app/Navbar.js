import React from 'react'
import './css/NavCss.css';

function Navbar() {
    return (
        <div className="row">
        <div className="col">
        <nav className="ddnavbar bg-light navbar navbar-expand navbar-light bg-light mb-4">
            <a className="navbar-brand" href="#">
            Sort By
            </a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >
                Update
                </a>
                <div
                className="dropdown-menu dropdown-menu-right animated--grow-in"
                aria-labelledby="navbarDropdown"
                >
                <a className="dropdown-item" href={`/asc&name`}>
                    Name [Ascending : A - Z]
                </a>
                <a className="dropdown-item" href={`/desc&name`}>
                    Name [Descending : Z - A]
                </a>
                <a className="dropdown-item" href={`/asc&skill`}>
                    Skill [Ascending : A - Z]
                </a>
                <a className="dropdown-item" href={`/desc&skill`}>
                    Skill [Descending : Z - A]
                </a>
                <a className="dropdown-item" href={`/asc&date_updated`}>
                    Update [Ascending : A - Z]
                </a>
                <a className="dropdown-item" href={`/desc&date_updated`}>
                    Update [Descending : Z - A]
                </a>
                <div className="" />
                </div>
            </li>
            </ul>
        </nav>
        </div>
        </div>
        


    )
}

export default Navbar
