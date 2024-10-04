import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "../../layout/locations";
import ModalMarker from "../common/modal/modal-marker.jsx";
import PointList from "../../hook/PointListAx.jsx";
import axios from "../../services/axios.js";




export function MapLocation() {
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [locations, setLocations] = useState([]);
  const [error , setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get("/points");

     setLocations(response?.data);
    } catch (err) {
      setError("Erreur lors de la récupération des points : " + err.message);
      console.error(err); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedLocationId > 0) {
      setShowModal(true);
    }
  }, [selectedLocationId]);

  return (
    <>
      {/* <PointList /> */}
      <div className="w-full">
        <MapContainer
          center={[48.11413, -1.67475]}
          zoom={13}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {locations?.map((location, index) =>
            location?.coords? (
              <Marker
                key={index}
                position={location?.coords?.split(',').map(Number)}
                zIndexOffset={index * 10}
                eventHandlers={{
                  click: () => {
                    setSelectedLocationId(location?.id);
                  },
                }}
              />
            ) : null 
          )}
        </MapContainer>
        <ModalMarker
          showModal={showModal}
          setShowModal={setShowModal}
          selectedLocationId={selectedLocationId}
        />
      </div>
    </>
  );
}
