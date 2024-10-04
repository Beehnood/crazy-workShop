import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "../../layout/locations";




function Map() {

  
  return (
    <MapContainer
      center={[48.111339, -1.68002]}
      zoom={13}
      style={{ height: "100vh", width: "75%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((locations, index) => (
        <Marker key={index} position={[locations.latitude, locations.longitude]}>
          <Popup>{locations?.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
    
    
  );
}

export default Map;
