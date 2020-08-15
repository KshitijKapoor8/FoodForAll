import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component.js';
import home from './pages/home.component.js';
import finder from './pages/finder.component.js';
import loginuser from './pages/loginuser.component.js';
import signup from './pages/signup.component.js';
import donate from './pages/donate.component.js';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={home} />
      <Route path='/donate' exact component={donate} />
      <Route path='/finder' exact component={finder} />
      <Route path='/loginuser' exact component={loginuser} />
      <Route path='/signup' exact component={signup} />
      
    </Router>
  );
}

export default App;
