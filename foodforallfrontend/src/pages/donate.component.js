import React, { Component } from "react";
import {
  Button,
  Card,
  ProgressBar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export class donate extends Component {
  constructor(props) {
    super(props);

    // this.donate = this.donate.bind(this);
    // this.addName = this.addName.bind(this);

    this.state = {
      posts: [],
    };

    axios
      .get("http://localhost:5000/posts/")
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

  //   donate(id) {
  //     axios.post('http://localhost:5000/posts/' + id).then((response) => {
  //       console.log(response.data);
  //     });

  render() {
    const renderCard = (card, index) => {
      return (
        <Card
          className="mb-3"
          border="success"
          text="dark"
          style={{
            width: "99%",
            height: "25rem",
            align: "right",
          }}
        >
          <Card.Body>
            <Card.Title>{card.item}</Card.Title>
            <Card.Text> {card.bankName} </Card.Text>
            <Card.Text> {card.bankAddress} </Card.Text>
            <Card.Text> {card.bankState} </Card.Text>

            <ProgressBar now={(card.itemCount / card.itemNeeded) * 100} />
            <InputGroup className="mt-5">
              <FormControl aria-describedby="basic-addon2"  inputRef={ref => { this.myInput = ref; }} />
              <InputGroup.Append>
                <Button variant="primary">Thank You</Button>
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
