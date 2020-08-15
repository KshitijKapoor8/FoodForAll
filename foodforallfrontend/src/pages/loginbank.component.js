import React, { Component } from "react";
import { Link } from "react-router-dom";

export class loginbank extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);

    this.state = {
      username: "",
      password: "",
      email: "",
      error: false
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
    };


    this.setState({
      username: "",
    });


    window.location = '/'

  }

  render() {
    return (
      <div>
        <h3>Login</h3>
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
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.enterEmail}
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

export default loginbank;
