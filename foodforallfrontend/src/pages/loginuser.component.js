import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css";


export class loginuser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  enterEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  enterPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({
      email: '',
      password: ''
    });

    axios
      .post('http://localhost:5000/users/login', user)
      .then((res) => console.log(res.data))
      .catch((err) => alert("404 Not Found")({
      }));

      
  }

  render() {
    return (
      <div>
        <h3 class="text-center">User Login</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3 ">
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
          <div className="form-group" class="text-center">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default loginuser;
