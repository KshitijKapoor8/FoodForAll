import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "../App.css";
import image from "../hiker.svg";
import Image from "react-bootstrap/Image";
import "../App.css";


const animatedComponents = makeAnimated();

const States = [
  { label: "Applesauce" },
  { label: "Canned Beans" },
  { label: "Canned Chicken" },
  { label: "Canned Fish (Tuna and Salmon)" },
  { label: "Canned Meat (SPAM and Ham)" },
  { label: "Canned Vegetables" },
  { label: "Cooking Oils (Olive and Canola)" },
  { label: "Crackers" },
  { label: "Dried Herbs and Spices" },
  { label: "Fruit (Canned or Dried)" },
  { label: "Granola Bars" },
  { label: "Instant Mashed Potatoes" },
  { label: "Meals in a Box" },
  { label: "Nuts" },
  { label: "Pasta" },
  { label: "Peanut Butter" },
  { label: "Rice" },
  { label: "Shelf-stable and Powdered Milk" },
  { label: "Soup, Stew and Chili" },
  { label: "Whole Grain Cereal" },
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
    
      error: "",
    };
  }

  

  onSubmit(e) {
    
  }
  render() {
    return (
      <div>
        <Image src={image} fluid />
        <h3 class="text-center">Make a food request!</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3 ">
          <div className="form-group">
            <label>Item: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.enterUsername}
            />
            <label>How much of this item do you need?: </label>
            <small style = {{color: "red"}}>{this.state.error}</small>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.enterPassword}
            />
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.enterEmail}
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
