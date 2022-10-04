import React from "react";
import { Marker } from "react-leaflet";
import { BsFillGeoAltFill } from "react-icons/bs";

const Markers = () => {
  return (
    <Marker
      position={{ lat: "37.7820847", lng: "-3.7767728" }}
      icon={<BsFillGeoAltFill />}
    />
  );
};

export default Markers;
