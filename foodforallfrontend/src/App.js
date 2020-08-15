import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component';
import home from './pages/home.component';
import finder from './pages/finder.component';
//import login from './pages/login.component';
//import signup from './pages/signup.component';
import donate from './pages/donate.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={home} />
      <Route path='/donate' exact component={donate} />
      <Route path='/finder' exact component={finder} />
      
    </Router>
  );
}

export default App;
