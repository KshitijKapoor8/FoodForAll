import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className = "navbar-brand">Our Mission</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/Donate" className="nav-link">Donate</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Signup" className="nav-link">Sign Up</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

//export default navbar
