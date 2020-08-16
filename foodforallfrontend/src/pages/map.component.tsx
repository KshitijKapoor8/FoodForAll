import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

//const AnyReactComponent = ({text}: any) => <div>{text}</div>;

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
        <Marker lat={29.749907} lng={-95.358421} text="HELLO" color="Red" />
        <Marker lat={11.0168} lng={76.9558} name="My Marker" color="Red" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
