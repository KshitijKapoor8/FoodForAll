import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  DropdownButton,
  MenuItem,
  Card,
} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class donate extends Component {
  constructor(props) {
    super(props);

    this.donate = this.donate.bind(this);
    this.addName = this.addName.bind(this);

    this.state = { 
        posts: [],
<<<<<<< HEAD
        bank: []
=======
        banks: []
>>>>>>> d5ada6f677210146abb4f0fe7ca40ab754f9f6bb
     };

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


      const x = this.state.post.bank;
      console.log(x);
    this.state.posts.forEach((post) => {
        const x = post.bank;
        console.log("hello");
        axios
          .get('/banks/' + x)
          .then((res) => {
            this.setState({
                banks: this.state.banks.push(res.data)
            })
            console.log(res.data);
          })
          .catch((err) => console.log('Error: ' + err));
      });

    console.log(this.state.banks);
  }

  componentDidMount() {
    
  }

  donate(id) {
    axios.post('http://localhost:5000/posts/' + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  addName(post, index) {}

  render() {
    const renderCard = (card, index) => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{card.item}</Card.Title>
            <Card.Text> {this.state.banks[index]} </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{this.state.posts.map(renderCard)}</div>;
  }
}

export default donate;
