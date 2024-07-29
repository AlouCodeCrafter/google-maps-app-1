import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY" // Remplacez par votre clé API
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Vous pouvez ajouter des composants enfants ici */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
