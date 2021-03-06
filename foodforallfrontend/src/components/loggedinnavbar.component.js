import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button, Card, ProgressBar } from "react-bootstrap";


import login from '../pages/loginuser.component.js';
import loginbank from '../pages/loginbank.component.js'

function checkUserType(){ //Check what type of user is logged in
    if(localStorage.getItem('checkiflogged', window.$loggedin) === 'bank')
    {
        return <Link to="/postcreation" className="nav-link h4">Create A Request</Link>;
    }
    else
        return;
}

export default class navbar extends Component {
    render() { //Render the navbar for the user who is logged in
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

                    <li className="navbar-item">
                        {checkUserType()}
                    </li>
                </ul>

                <ul className = "nav navbar-nav ml-auto">
                    <li className="navbar-item">
                        <Button variant="danger" onClick = {() => {window.$loggedin=false; localStorage.setItem("checkiflogged", window.$loggedin); window.$switchNav(); window.location = '/';}} className="nav-link h4">Logout</Button>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}
