import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "../App.css";
import image from "../hiker.svg";
import Image from "react-bootstrap/Image";


const animatedComponents = makeAnimated();

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

export class signupbank extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.enterState = this.enterState.bind(this);
    this.enteraddress = this.enteraddress.bind(this);
    this.enterEmail = this.enterEmail.bind(this);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      address: "",
      stateLocation: "Choose State",
      error: "",
    };
  }

  enterUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  enterPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  confirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  enterState(optionSelected) {
    const label = optionSelected.label;
    this.setState({
      stateLocation: label,
    });
  }

  enteraddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  enterEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    if (this.state.password === this.state.confirmPassword) {
      e.preventDefault();

      const user = {
        bankName: this.state.username,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        stateLocation: this.state.stateLocation,
      };

      this.setState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        address: "",
        stateLocation: "",
      });

      axios
        .post("http://localhost:5000/banks/add", user)
        .then((res) => console.log(res.data))
        .catch((err) => alert("404 Not Found"));

      console.log("hello");
      window.location = "/";
    } else {
      e.preventDefault();
      this.setState({
        error: "Passwords did not match",
      });
    }
  }

  render() {
    return (
      
      <div>
        <Image src={image} fluid />
        <h3 class="text-center">Sign Up-Food Bank</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3 ">
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
            <label>Enter Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.enteraddress}
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

export default signupbank;
