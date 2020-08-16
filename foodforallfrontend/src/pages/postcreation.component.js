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

const Food = [
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

export class postcreation extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.enterCount = this.enterCount.bind(this);

    this.state = {
      item: "",
      count: "",
    };
  }

  enterCount(e) {
    this.setState({
      count: e.target.value,
    });
  }

  selectItem(optionSelected) {
    const label = optionSelected.label;
    this.setState({
      item: label,
    });
  }
  onSubmit(e) {
    const submit = {
      item: this.state.item,
      count: this.state.count,
    };
    this.state = {
      item: "",
      count: "",
    };
  }
  render() {
    return (
      <div>
        <Image src={image} fluid />
        <h3 class="text-center"  style={{
                  align: "center",
                  marginTop: "1rem"
                }}>Make a food request!</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3 "  style={{
                  align: "center",
                  marginTop: "1rem"
                }}>
          <div className="form-group">
            <label>Which Item do you need?: </label>
            <Select
              options={Food}
              components={animatedComponents}
              onChange={this.selectItem}
              multiple={false}
              style = {{margin: "mx-auto"}}
            />
            <label>Item Count: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.count}
              onChange={this.enterCount}
            />
            <div className="form-group" class="text-center">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
                style={{
                  align: "center",
                  marginTop: "1rem"
                }}
                
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default postcreation;
