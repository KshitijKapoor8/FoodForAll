import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import image from "../hiker.svg";
import Image from "react-bootstrap/Image";
import App from "../App.js";
import Loggedinnavbar from "../components/loggedinnavbar.component.js";

window.$userToken = "";
window.$loggedin = "";

export class loginuser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this); //Binds the functions to corrects props
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);

    this.state = {
      //Sets the state of the variables
      email: "",
      password: "",
      error: "",
    };
  }

  enterEmail(e) {
    //Sets the email from field
    this.setState({
      email: e.target.value,
    });
  }

  enterPassword(e) {
    //Sets the password from field
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    //Submit the form
    e.preventDefault();

    const user = {
      //Saves var to user var
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({
      //Sets vars back to default
      email: "",
      password: "",
    });
    axios
      .post("http://localhost:5000/users/login", user) //Sends post request to the database
      .then((res) => {
        window.$loggedin = "user";
        localStorage.setItem("checkiflogged", window.$loggedin);
        window.$userToken = res.data;
        localStorage.setItem("userToken", window.$userToken);
        console.log(window.$userToken);
        console.log(window.$loggedin);
        window.location = "/";
      }) //Saves if User is logged in as bank or user
      .catch((err) =>
        this.setState({
          error: "Your username or passward was incorrect ", //Sends error if 404 comes out
        })
      );
  }

  render() {
    return (
      //Render the form
        <div>
          <h3 class="text-center" style={{ marginTop: "10rem" }}>User Login</h3>
          <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3" >
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.enterEmail}
              />
              <label>Password: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.enterPassword}
              />
            </div>
            <small style={{ color: "red" }}>{this.state.error}</small>
            <div className="form-group" class="text-center">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
    );
  }
}

export default loginuser;
