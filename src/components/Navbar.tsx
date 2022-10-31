import React from 'react'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper #ad1457 pink darken-3 px1">
                <a href="#" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/">ToDo list</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
