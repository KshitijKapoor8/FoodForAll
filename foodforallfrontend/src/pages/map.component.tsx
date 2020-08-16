import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { Map, InfoWindow, GoogleApiWrapper } from "google-maps-react";

const SimpleMap = (props: any) => { //Sets the starting location of map
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  return (
    <div style={{ height: "100vh", width: "100%", }}>
      <GoogleMapReact //API key with center
        bootstrapURLKeys={{ key: "AIzaSyAntY_MMkHE82gDr-VfdpuEpMypD8J7WrA" }}
        center={{ lat: 29.749907, lng: -95.358421 }}
        defaultZoom={zoom}
      >    
        <Marker //Markers for food bank
          lat={29.78067}
          lng={-95.27453}
          name={"535 Portwall Street, Houston Food Bank"}
          color="Red"
        /> 
        <Marker
          lat={29.41704}
          lng={-98.59166}
          name="5200 Enrique M Barrera Pkwy, San Antonio Food Bank"
          color="Red"
        />
        <Marker
          lat={33.00327}
          lng={-96.76009}
          name="3677 Mapleshade Lane, Dallas Food Bank"
          color="Red"
        />
        <Marker
          lat={30.20318}
          lng={-97.70958}
          name="6500 Metropolis Drive, Austin Food Bank"
          color="Red"
        />
        <Marker
          lat={31.670122}
          lng={-106.323195}
          name="9541 Plaza Circle, El Paso Food Bank"
          color="Red"
        />
        <Marker
          lat={45.580421}
          lng={-122.63169}
          name="7900 NE 33rd Drive,Oregon Food Bank"
          color="Red"
        />
        <Marker
          lat={47.170363}
          lng={-122.444266}
          name="815 South 96th Street, Seattle Food Bank"
          color="Red"
        />
        <Marker
          lat={47.6607017}
          lng={-117.394239}
          name="1234 E. Front Avenue, Spokane Food Bank"
          color="Red"
        />
        <Marker
          lat={46.870398}
          lng={-113.989454}
          name="5625 Expressway, Montana Food Bank "
          color="Red"
        />
        <Marker
          lat={43.570399}
          lng={-116.192014}
          name="3562 South TK Avenue Idaho Food Bank"
          color="Red"
        />
        <Marker
          lat={35.144119}
          lng={-106.601083}
          name="5840 Office Blvd NE,New Mexico Food Bank"
          color="Red"
        />
        <Marker
          lat={35.430328}
          lng={-97.613708}
          name="3355 S. Purdue, Oakloahoma Food Bank"
          color="Red"
        />
        <Marker
          lat={36.170611}
          lng={-115.098157}
          name="4190 N. Pecos Rd., Las Vegas Food Bank"
          color="Red"
        />
        <Marker
          lat={32.903914}
          lng={-117.181628}
          name="9455 Waples Street, Suite 135, San Diego Food Bank"
          color="Red"
        />
        <Marker
          lat={44.928723}
          lng={-93.249358}
          name="1734 E. 41st Street, Los Angeles Food Bank"
          color="Red"
        />
        <Marker
          lat={33.409533}
          lng={-111.850749}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.774845}
          lng={-87.730149}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={32.986508}
          lng={-83.700964}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.073188}
          lng={-81.536683}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={40.782997}
          lng={-73.520511}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={40.696723}
          lng={-74.214032}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={38.271011}
          lng={-77.455593}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={39.513939}
          lng={-104.765842} 
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={35.240375}
          lng={-80.837577}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.796881}
          lng={41.796881}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.355704}
          lng={-72.301022}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={39.174601}
          lng={-86.57224}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.774845}
          lng={-87.730149}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={40.432165}
          lng={-86.88443}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={35.240375}
          lng={-80.837577}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.774845}
          lng={-87.730149}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />

        <Marker
          lat={41.774845}
          lng={41.774845}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={39.107108}
          lng={39.107108}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={40.432165}
          lng={-86.88443}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={-27.560526}
          lng={153.051639}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={53.363177}
          lng={-2.2701}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />

        <Marker
          lat={29.759976}
          lng={-95.362573}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={36.222826}
          lng={-94.114285}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={41.213488}
          lng={-96.077737}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={36.522531}
          lng={-88.374323}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={53.363177}
          lng={-2.2701}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
        <Marker
          lat={30.341142}
          lng={-81.732907}
          name="245 South Nina Drive, Phoenix Food Bank"
          color="Red"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
