import React from "react";
import { Parallax } from "react-parallax";
import image from "../hunger.jpg";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg"

import { Card, CardDeck } from "react-bootstrap";
import "../App.css";
import Image from 'react-bootstrap/Image'

const pBottomStyle = { 
  background: "#000",
  height: "1000px",
  margin: "0"
};

function home() {
  return (
    <div style={{ textAlign: "center" }} >
      <Parallax
        bgImage={image}
        strength={200}
        renderLayer={(precentage) => (
          <div>
              <div class="transbox">
                <h1>Hunger: The Ultimate Problem</h1>
                <h4>In these trying times, food banks are becoming a necessity to the American people.</h4>
              </div>
          </div>
        )}
      >
        <div style={{ height: 825,margin: "0" }}></div>
      </Parallax>
      
        <Parallax
        bgImage={image1}
        strength={200}
        renderLayer={(precentage) => (
          <div>
              <div style = {{width:'25rem', height:'25rem', border:"2px solid black", backgroundColor:"white", opacity:".8", float:"left"}}>
                <h1 style={{fontFamily:"Segoe UI", fontWeight:"bold", textAlign:"left", marginLeft: '1rem'}}>Our Mission</h1>
                <h4 style={{textAlign:"left", marginLeft: '1rem'}}>We wish to see a community in which people are able to get sufficent food and resources.
                    We believe that access to healthy nutritious food is a basic human right. Our Mission is to provide a platform in which food banks can express their needs and benefactors can donate. </h4>
              </div>
          </div>
        )}
      >
        <div style={{ height: 410,margin: "0" }}></div>
      </Parallax>
        

        <Parallax
        bgImage={image2}
        strength={200}
        renderLayer={(precentage) => (
          <div>
              <div style = {{width:'25rem', height:'25rem', border:"2px solid black", backgroundColor:"white", opacity:".8", float:"right"}}>
                <h1 style={{fontFamily:"Segoe UI", fontWeight:"bold", textAlign:"right", marginRight: '1rem'}}>Features</h1>
                <h4 style={{textAlign:"right", marginRight: '1rem'}}>With our site, food banks will be able to request items they need, with users having the ability to pool their resources to help those in need. With millions of Americans in poverty
                , our site will allow for those in need to recieve basic necesities that they otherwise would not have recieved. </h4>
              </div>
          </div>
        )}
      >
        <div style={{ height: 410,margin: "0" }}></div>
      </Parallax>
        

        <Parallax
        bgImage={image3}
        strength={200}
        renderLayer={(precentage) => (
          <div>
              <div style = {{width:'25rem', height:'25rem', border:"2px solid black", backgroundColor:"white", opacity:".8", float:"left"}}>
                <h1 style={{fontFamily:"Segoe UI", fontWeight:"bold", textAlign:"left", marginLeft: '1rem'}}>Bank Database</h1>
                <h4 style={{textAlign:"left", marginLeft: '1rem'}}>Our site is simple and easy to use, tailored towards food banks who want a more widespread way to share their need, making our site a center for food banks and their donors. </h4>
              </div>
          </div>
        )}
      >
        <div style={{ height: 410,margin: "0" }}></div>
      </Parallax>
        
      </div>
  );
}

export default home;
