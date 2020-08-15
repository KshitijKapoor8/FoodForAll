import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";



export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/" class = "navbar-brand mb-0 h4">FoodForAll</a>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/Donate" className="nav-link">Donate</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href='/userlogin' class="dropdown-item">User Login</a>
                            <a href="/banklogin" class="dropdown-item">Food Bank Login</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href='/usersignup' class="dropdown-item">User Sign Up</a>
                            <a href="/banksignup" class="dropdown-item">Food Bank Sign Up</a>
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
