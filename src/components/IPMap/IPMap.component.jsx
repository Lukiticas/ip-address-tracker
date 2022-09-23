import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { MapSection } from "./IPMap.styles";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const MapControl = ({ coords, zoom }) => {
  const map = useMap();
  map.setView(coords);
  map.setZoom(zoom);
  return null;
};

const IPMap = ({ coords, zoom }) => {
  const [x, y] = coords;

  const Icon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [27, 45],
    iconAnchor: [27, 55],
  });

  return (
    <MapSection>
      <MapContainer
        className="country-map"
        center={[x, y]}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <MapControl coords={coords} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          className="map-tiles"
          ZoomON
        />
        <Marker position={[x, y]} icon={Icon}></Marker>
      </MapContainer>
    </MapSection>
  );
};

export default IPMap;
