import React, { Component } from "react";
import { Link } from "react-router-dom";

export class loginuser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.enterUsername = this.enterUsername.bind(this)

    this.state = {
      username: "",
      password: "",
    };
  }
  enterUsername(e) {
      this.setState({
          username: e.target.value
      })
  }




  onSubmit(e) {
    e.preventDefault();

    const user = {
      usernama: this.state.username,
      //password: this.state.password,
    };
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
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

export default loginuser;
