import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component.js';
import home from './pages/home.component.js';
import finder from './pages/finder.component.js';
import login from './pages/loginuser.component.js';
import loginbank from './pages/loginuser.component.js';
import signup from './pages/signupuser.component.js';
import signupbank from './pages/signupbank.component.js';
import donate from './pages/donate.component.js';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={home} />
      <Route path='/donate' exact component={donate} />
      <Route path='/finder' exact component={finder} />
      <Route path='/login' exact component={login} />
      <Route path='/signup' exact component={signup} />
      <Route path='/loginbank' exact component={loginbank} />
      <Route path='/signupbank' exact component={signupbank} />
      
    </Router>
  );
}

export default App;
