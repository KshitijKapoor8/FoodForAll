import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Dropdown from "react-dropdown";


const animatedComponents = makeAnimated();

const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 },
];

export class signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.enterState = this.enterState.bind(this);
    this.enterEmail = this.enterEmail.bind(this);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      stateLocation: "",
      error: false,
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

  enterEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      email: this.state.email,
      stateLocation: this.state.stateLocation,
    };

    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      stateLocation: "",
    });

    console.log(user);
    window.location = '/'

    //axios.post('http://localhost:5000/users/add', user)
    // .then(res => console.log(res.data))
    // .catch(err =>this.setState({
    //    error: true
    // }))
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
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
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.enterPassword}
            />
            <label>Confirm Password: </label>
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
          </div>
          <div>
            <Select
              options={Countries}
              components={animatedComponents}
              onChange={this.enterState}
              multiple={false}
            />
          </div>
          <div className="form-group">
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
