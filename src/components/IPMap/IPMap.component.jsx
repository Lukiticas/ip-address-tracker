import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { MapSection } from "./IPMap.styles";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const MapControl = ({ coords }) => {
  const map = useMap();
  map.setView(coords);
  return null;
};

const IPMap = ({ coords }) => {
  const [x, y] = coords;

  const Icon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
  });

  return (
    <MapSection>
      <MapContainer
        className="country-map"
        center={[x, y]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <MapControl coords={coords} />
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
