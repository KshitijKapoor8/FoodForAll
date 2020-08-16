import React, { Component } from 'react'
import { Button,  ButtonGroup, DropdownButton, MenuItem, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class donate extends Component {

    constructor(props) {
        super(props);

        this.donate = this.donate.bind(this)

        
        
    }

    

    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                this.setState( {posts: response.data} )
            })
            .catch(error => {
                console.log(error);
            })
    }

    donate(id) {
        axios.post('http://localhost:5000/posts/'+id, )
          .then(response => { console.log(response.data)});
    
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
      }
    

    render() {
        this.state = { posts: [
            {
                bank: "5f384335a7bda703f87a9606",
                item: "Canned Foods",
                itemCount: 300,
                itemNeeded: 1000
            },
            {
                bank: "5f384335a7bda703f87a9606",
                item: "Carrots",
                itemCount: 3100,
                itemNeeded: 10000
            }
        ] };

        const renderCard = (card, index) => {
            return(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            )
        }

        return (
            <div className="grid">
                {this.state.posts.map(renderCard)}
            </div>
        )
    }
}

export default donate;
