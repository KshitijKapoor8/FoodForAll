import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import '../App.css';
import image from '../hiker.svg';
import Image from 'react-bootstrap/Image';
import '../App.css';

const animatedComponents = makeAnimated();

const Food = [
  { label: 'Applesauce' },
  { label: 'Canned Beans' },
  { label: 'Canned Chicken' },
  { label: 'Canned Fish (Tuna and Salmon)' },
  { label: 'Canned Meat (SPAM and Ham)' },
  { label: 'Canned Vegetables' },
  { label: 'Cooking Oils (Olive and Canola)' },
  { label: 'Crackers' },
  { label: 'Dried Herbs and Spices' },
  { label: 'Fruit (Canned or Dried)' },
  { label: 'Granola Bars' },
  { label: 'Instant Mashed Potatoes' },
  { label: 'Meals in a Box' },
  { label: 'Nuts' },
  { label: 'Pasta' },
  { label: 'Peanut Butter' },
  { label: 'Rice' },
  { label: 'Shelf-stable and Powdered Milk' },
  { label: 'Soup, Stew and Chili' },
  { label: 'Whole Grain Cereal' },
];

export class postcreation extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.enteritemNeeded = this.enteritemNeeded.bind(this);

    this.state = {
      bankName: '',
      bankAddress: '',
      bankState: '',
      item: '',
      itemCount: '',
      itemNeeded: '',
    };

    var x = localStorage.getItem('bankToken', window.$bankToken);
    axios
      .get('http://localhost:5000/banks/' + x)
      .then((res) => {
        this.setState({bankName : res.data.bankName, bankAddress : res.data.address, bankState : res.data.stateLocation, itemCount : 0});
      })
      .catch((err) => {
        console.log('Error :' + err);
      });
  }

  enteritemNeeded(e) {
    this.setState({
      itemNeeded: e.target.value,
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
      bankName: this.state.bankName,
      bankAddress: this.state.bankAddress,
      bankState: this.state.bankState,
      item: this.state.item,
      itemCount: this.state.itemCount,
      itemNeeded: this.state.itemNeeded,
    };
    this.state = {
      item: '',
      itemNeeded: '',
    };
    console.log(submit);

    axios.post('http://localhost:5000/posts/add', submit)
      .then(res => console.log(res.data))
      .catch(err => console.log('Error: ' + err));
  }
  render() {
    return (
      <div>
        <Image src={image} fluid />
        <h3 class="text-center">Make a food request!</h3>
        <form onSubmit={this.onSubmit} class="col-lg-6 offset-lg-3 ">
          <div className="form-group">
            <label>Which Item do you need?: </label>
            <Select
              options={Food}
              components={animatedComponents}
              onChange={this.selectItem}
              multiple={false}
            />
            <label>Item itemNeeded: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.itemNeeded}
              onChange={this.enteritemNeeded}
            />
            <div className="form-group" class="text-center">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default postcreation;
