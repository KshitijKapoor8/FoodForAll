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
            </nav>
            </div>
        )
    }
}
