import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import login from '../pages/loginuser.component.js';
import loginbank from '../pages/loginbank.component.js'


export default class navbar extends Component {
    render() {
        return (
            <div class="p-3 mb-2 bg-success text-white">
            <nav className="navbar navbar-light bg-green navbar-expand-lg" >
                
                <ul className="nav navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" class = "nav-link h2">FoodForAll</Link>
                    </li>
                    
                    <li className="navbar-item">
                        <a class = "nav-link h2"></a>
                    </li>
                </ul>

                <ul className="nav navbar-nav">
                    <li className="navbar-item">
                        <Link to="/Donate" className="nav-link h4">Donate</Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/Finder" className="nav-link h4">Finder</Link>
                    </li>
                </ul>

                
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle h4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-user"></span> Login</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href='/userlogin' class="dropdown-item">User Login</a>
                            <a href="/banklogin" class="dropdown-item">Food Bank Login</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle h4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href='/usersignup' class="dropdown-item">User Sign Up</a>
                            <a href="/banksignup" class="dropdown-item">Food Bank Sign Up</a>
                        </div>
                    </li>  

                    <li className="navbar-item">
                        <a class = "nav-link h2"></a>
                    </li>  

                    <li className="navbar-item">
                        <a class = "nav-link h2"></a>
                    </li>  
                </ul>
            </nav>
            </div>
        )
    }
}
