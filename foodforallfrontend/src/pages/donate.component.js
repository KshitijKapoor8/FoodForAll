import React, { Component } from 'react';
import {
  Button,
  Card,
  ProgressBar,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export class donate extends Component {
  
  
  
  
  
  
  constructor(props) {
    super(props);

    // this.donate = this.donate.bind(this);
    // this.addName = this.addName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      posts: [],
      bankName: '',
      bankAddress: '',
      bankState: '',
      item: '',
      itemCount: '',
      itemNeeded: '',
      value: '',
    };

    //var x = localStorage.getItem('bankToken', window.$bankToken);
    axios
      .get('http://localhost:5000/posts/')
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    
    }

  donate(id) {

  }


handleChange(e) {
  this.setState({ value: e.target.value });

 }




  // to call this.myInput.value
  render() {
    const renderCard = (card, index) => {
      return (
        <Card
          className="mb-3"
          border="dark"
          text="dark"
          style={{
            width: '60%',
            height: '17.6rem',
            margin: 'auto',
          }}
        >
          <Card.Body>
            <Card.Title>{card.item}</Card.Title>
            <Card.Text> {card.bankName} </Card.Text>
            <Card.Text> {card.bankAddress} </Card.Text>
            <Card.Text> {card.bankState} </Card.Text>

            <ProgressBar now={(card.itemCount / card.itemNeeded) * 100} />
            <InputGroup className="mt-4" style={{ width: '20%' }}>
              <FormControl aria-describedby="basic-addon2" onChange={this.handleChange} value={this.state.value}/>       
              <InputGroup.Append> 
                <button
                  style={{
                    backgroundColor: '#007bff',
                    borderRadius: '6px',
                    border: '5px',
                  }}
                  variant="primary"
                  onClick = {(id) => {
                    console.log('hello');
                    const obj = {

                      bankName: card.bankName,
                      bankAddress: card.bankAddress,
                      bankState: card.bankState,
                      item: card.item,
                      itemCount: Number(card.itemCount + this.inputRef),
                      itemNeeded: card.itemNeeded

                    }
                    console.log(this.myInput.value);

                    axios.post('http://localhost:5000/posts/update/' + card._id, obj).then((response) => {
                      console.log(response.data);
                      });
                  }}
                >
                  Donate!
                </button>
  
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{this.state.posts.map(renderCard)}</div>;
  }
}

export default donate;
