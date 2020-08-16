import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from 'axios'

import loginuser from '../pages/loginuser.component.js';
import loginbank from '../pages/loginbank.component.js'

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
                
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
                    <li>
                        {
                        state = {username:''};
                        axios.get("http://localhost:5000/users/")
                        .then(res => this.setState{res})
                        }
                    </li> 

                    <li className="navbar-item">
                        <a class = "nav-link h2"></a>
                    </li>  

                    <li className="navbar-item">
                        <a class = "nav-link h2"></a>
                    </li>  
                </ul>
            </nav>
        )
    }
}
