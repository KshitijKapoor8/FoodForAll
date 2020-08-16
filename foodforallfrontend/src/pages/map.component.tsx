import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

//const AnyReactComponent = ({text}: any) => <div>{text}</div>;
// Texas, New Mexico, Washington, Oaklahoma, Arizona, Idaho, Colorado, California
const SimpleMap = (props: any) => {
  
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAntY_MMkHE82gDr-VfdpuEpMypD8J7WrA" }}
        center={{ lat: 29.749907, lng: -95.358421 }}
        defaultZoom={zoom}
        
      > 
      
        <Marker lat={29.780670} lng={-95.274530} text="535 Portwall Street, Houston Food Bank" color="Red" />
        <Marker lat={29.417040} lng={-98.591660} name="5200 Enrique M Barrera Pkwy, San Antonio Food Bank" color="Red" />
        <Marker lat={33.003270} lng={-96.760090} text="3677 Mapleshade Lane, Dallas Food Bank" color="Red" />
        <Marker lat={30.203180} lng={-97.709580} name="6500 Metropolis Drive, Austin Food Bank" color="Red" />
        <Marker lat={31.670122} lng={ -106.323195} text="9541 Plaza Circle, El Paso Food Bank" color="Red" />
        <Marker lat={45.580421} lng={122.63169} name="7900 NE 33rd Drive,Oregon Food Bank" color="Red" />
        <Marker lat={47.170363} lng={-122.444266} text="815 South 96th Street, Seattle Food Bank" color="Red" />
        <Marker lat={47.659582} lng={ -117.394239} name="1234 E. Front Avenue, Spokane Food Bank" color="Red" />
        <Marker lat={46.870398} lng={-113.989454} text="5625 Expressway, Montana Food Bank " color="Red" />
        <Marker lat={43.570399} lng={-116.192014} name="3562 South TK Avenue Idaho Food Bank" color="Red" />
        <Marker lat={35.144119} lng={-106.601083} text="5840 Office Blvd NE,New Mexico Food Bank" color="Red" />
        <Marker lat={35.430328} lng={ -97.613708} name="3355 S. Purdue, Oakloahoma Food Bank" color="Red" />
        <Marker lat={36.170611} lng={-115.098157} text="4190 N. Pecos Rd., Las Vegas Food Bank" color="Red" />
        <Marker lat={32.903914} lng={ -117.181628} name="9455 Waples Street, Suite 135, San Diego Food Bank" color="Red" />
        <Marker lat={44.928723} lng={  -93.249358} name="1734 E. 41st Street, Los Angeles Food Bank" color="Red" />
        <Marker lat={33.409533} lng={  -111.850749} name="245 South Nina Drive, Phoenix Food Bank" color="Red" />
      </GoogleMapReact>
    </div>
  );
  
};

export default SimpleMap;
