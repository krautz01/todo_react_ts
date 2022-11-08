import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper #ad1457 pink darken-3 px1">
                <a href="#" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">ToDo list</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
