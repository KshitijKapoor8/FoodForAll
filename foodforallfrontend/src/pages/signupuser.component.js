import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "../App.css";
import image from "../hiker.svg";
import Image from "react-bootstrap/Image";

const animatedComponents = makeAnimated(); //Makes select form have cool animation

const States = [
  { label: "Alabama" },
  { label: "Alaska" },
  { label: "Arizona" },
  { label: "Arkansas" },
  { label: "California" },
  { label: "Colorado" },
  { label: "Connecticut" },
  { label: "Delaware" },
  { label: "Florida" },
  { label: "Georgia" },
  { label: "Hawaii" },
  { label: "Idaho" },
  { label: "Illinois" },
  { label: "Indiana" },
  { label: "Iowa" },
  { label: "Kansas" },
  { label: "Kentucky" },
  { label: "Louisiana" },
  { label: "Maine" },
  { label: "Maryland" },
  { label: "Massachusetts" },
  { label: "Michigan" },
  { label: "Minnesota" },
  { label: "Mississippi" },
  { label: "Missouri" },
  { label: "Montana" },
  { label: "Nebraska" },
  { label: "Nevada" },
  { label: "New Hampshire" },
  { label: "New Jersey" },
  { label: "New Mexico" },
  { label: "New York" },
  { label: "North Carolina" },
  { label: "North Dakota" },
  { label: "Ohio" },
  { label: "Oklahoma" },
  { label: "Oregon" },
  { label: "Pennsylvania" },
  { label: "Rhode Island" },
  { label: "South Carolina" },
  { label: "South Dakota" },
  { label: "Tennessee" },
  { label: "Texas" },
  { label: "Utah" },
  { label: "Vermont" },
  { label: "Virginia" },
  { label: "Washington" },
  { label: "West Virginia" },
  { label: "Wisconsin" },
  { label: "Wyoming" },
];

export class signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this); //Binds fucntions to correct var
    this.enterUsername = this.enterUsername.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.enterState = this.enterState.bind(this);
    this.enterEmail = this.enterEmail.bind(this);

    this.state = { //Sets default state of var
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      stateLocation: "",
      error: "",
    };
  }

  enterUsername(e) { //Sets username from form
    this.setState({
      username: e.target.value,
    });
  }

  enterPassword(e) { //Sets password from form
    this.setState({
      password: e.target.value,
    });
  }

  confirmPassword(e) {//Confirm password from form
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  enterState(optionSelected) {//Sets the state from the form
    const label = optionSelected.label;
    this.setState({
      stateLocation: label,
    });
  }

  enterEmail(e) { //Sets the email from the form
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    if (this.state.password === this.state.confirmPassword) { //Makes sure the passwords match
      e.preventDefault();

      const user = { //Saves var to user 
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        stateLocation: this.state.stateLocation,
      };

      this.setState({ //Sets state to default
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        stateLocation: "",
      });
      axios
        .post("http://localhost:5000/users/add", user) //Sends post request to database
        .then((res) => console.log(res.data))
        .catch((err) => alert("404 Not Found"));
    } else {
      e.preventDefault(); //Error if passwords do not match
      this.setState({
        error: "Passwords did not match",
      });
    }
  }

  render() {
    return ( //Render form
      <div>
        <h3 class="text-center" style={{ marginTop: "7rem" }}>Sign Up</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3">
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.enterUsername}
            />
            <label>Password: </label>
            <small style = {{color: "red"}}>{this.state.error}</small>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.enterPassword}
            />
            <label>Confirm Password: </label>
            <small style = {{color: "red"}}>{this.state.error}</small>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.confirmPassword}
              onChange={this.confirmPassword}
            />
            <label>Enter Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.enterEmail}
            />
            <label>Enter State: </label>
            <Select
              options={States}
              components={animatedComponents}
              onChange={this.enterState}
              multiple={false}
            />
          </div>
          <div className="form-group" class="text-center">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default signup;
