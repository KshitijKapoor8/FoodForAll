import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";


const animatedComponents = makeAnimated();

const label = [];

const Countries = [
  { label: "Albania"},
  { label: "Argentina"},
  { label: "Austria"},
  { label: "Cocos Islands"},
  { label: "Kuwait"},
  { label: "Sweden"},
  { label: "Venezuela" },
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

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      address: "",
      stateLocation: "Choose State",
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

  enteraddress(e) {
    this.setState({
        address: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      address: this.state.address,
      stateLocation: this.state.stateLocation,
    };

    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      address: "",
      stateLocation: "",
    });

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
        <h3>Sign Up-Food Bank</h3>
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
            <label>Enter Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.enteraddress}
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

export default signupbank;
