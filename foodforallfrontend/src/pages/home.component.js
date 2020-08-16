import React from 'react';
import { Parallax } from 'react-parallax';
import image from '../lanscape.jpg'



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
        <div style={{ height: 1500 }}>

        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>


    </div>

    
  );
}

export default home;