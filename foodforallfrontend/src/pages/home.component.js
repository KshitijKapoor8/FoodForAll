import React from 'react';
import { Parallax } from 'react-parallax';
import image from '../hiker.svg'
import {Card, Button} from 'react-bootstrap'
import "../App.css";



const pBottomStyle = {
    background: '#000',
    height: '1000px',
    
}


function home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax 
        bgImage={image}
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}>FoodForAll</div>
          </div>
                  
        )}
      >
        <div style={{ height: 900 }}>

        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
      <div className="cardGroup">
        <Card className='card1'>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card2'>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='card3'>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      


    </div>

    
  );
}

export default home;