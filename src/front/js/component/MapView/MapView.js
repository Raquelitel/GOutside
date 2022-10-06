import React, { useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../MapView/MapView.css";

const MapView = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleMapClick(event) {
    console.log(event);
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <div>
      <Map
        center={[37.7797221, -3.7943167]}
        className="leaflet-container"
        zoom={15}
        onclick={handleMapClick}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxlamFuZHJvcm9tbyIsImEiOiJjbDh0NDVvYzEwMzM2M25wNzl5MGhzYXZ4In0.2rb46ZKM7zgCjMnr0rkMsA`}
        />
        <Marker
          interactive={false}
          position={[position.latitude, position.longitude]}
        />
      </Map>
    </div>
  );
};

export default MapView;
