import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Map, GoogleApiWrapper } from 'google-maps-react';


import Navbar from './components/navbar.component.js';
import home from './pages/home.component.js';
import finder from './pages/map.component.tsx';
import login from './pages/loginuser.component.js';
import loginbank from './pages/loginbank.component.js'
import signupbank from './pages/signupbank.component.js'
import signup from './pages/signupuser.component.js';
import donate from './pages/donate.component.js';

const mapStyles = {
  width: '100%',
  height: '100%'
};


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' exact component={home} />
      <Route path='/donate' exact component={donate} />
      <Route path='/finder' exact component={finder} />
      <Route path='/userlogin' exact component={login} />
      <Route path='/usersignup' exact component={signup} />
      <Route path='/banklogin' exact component={loginbank} />
      <Route path='/banksignup' exact component={signupbank} />
    </Router>
  );
}

export default App