'use client';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import IconMarker from '../../../public/images/icon-location.svg';
import { LatLngExpression } from 'leaflet';

type LeafletProps = {
  position: LatLngExpression;
};

export default function Leaflet({ position }: LeafletProps) {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-96"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new L.Icon({
            iconUrl: IconMarker.src,
            iconRetinaUrl: IconMarker.src,
            iconSize: [30, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
          })
        }
      >
        <Popup>You are here.</Popup>
      </Marker>
    </MapContainer>
  );
}
