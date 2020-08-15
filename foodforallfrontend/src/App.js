import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component';
import home from './pages/home.component';
import finder from './pages/finder.component';
import login from './pages/loginuser.component';
import signup from './pages/signup.component';
import donate from './pages/donate.component';
import company from './pages/logincompany.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={home} />
      <Route path='/donate' exact component={donate} />
      <Route path='/finder' exact component={finder} />
      <Route path='/login' exact component={login} />
      <Route path='/logincompany' exact component={company} />
      <Route path='/signup' exact component={signup} />
      
    </Router>
  );
}

export default App;
