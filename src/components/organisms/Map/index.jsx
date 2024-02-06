import React from 'react';
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

import placeholderIcon from '../../../assets/images/icons/placeholder.png';

const customIcon = new L.Icon({
  iconUrl: placeholderIcon,
  iconSize: [40, 40],
});

const position = [-6.318049403965516, 107.37920228561168];

function Map() {
  return (
    <MapContainer
      className="map-action"
      center={position}
      zoom={15}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position} icon={customIcon}>
        <Popup>STTI Sony Sugema</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
