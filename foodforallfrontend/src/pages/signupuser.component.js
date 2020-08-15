import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";



const animatedComponents = makeAnimated();

const States = [
  {label: "Alabama"},
  {label: "Alaska"},
  {label: "Arizona"},
  {label: "Arkansas"},
  {label: "California"},
  {label: "Colorado"},
  {label: "Connecticut"},
  {label: "Delaware"},
  {label: "Florida"},
  {label: "Georgia"},
  {label: "Hawaii"},
  {label: "Idaho"},
  {label: "Illinois"},
  {label: "Indiana"},
  {label: "Iowa"},
  {label: "Kansas"},
  {label: "Kentucky"},
  {label: "Louisiana"},
  {label: "Maine"},
  {label: "Maryland"},
  {label: "Massachusetts"},
  {label: "Michigan"},
  {label: "Minnesota"},
  {label: "Mississippi"},
  {label: "Missouri"},
  {label: "Montana"},
  {label: "Nebraska"},
  {label: "Nevada"},
  {label: "New Hampshire"},
  {label: "New Jersey"},
  {label: "New Mexico"},
  {label: "New York"},
  {label: "North Carolina"},
  {label: "North Dakota"},
  {label: "Ohio"},
  {label: "Oklahoma"},
  {label: "Oregon"},
  {label: "Pennsylvania"},
  {label: "Rhode Island"},
  {label: "South Carolina"},
  {label: "South Dakota"},
  {label: "Tennessee"},
  {label: "Texas"},
  {label: "Utah"},
  {label: "Vermont"},
  {label: "Virginia"},
  {label: "Washington"},
  {label: "West Virginia"},
  {label: "Wisconsin"},
  {label: "Wyoming"},
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
        <h3 class="col-lg-6 offset-lg-3 ">Sign Up</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3" >
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
              options={States}
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
