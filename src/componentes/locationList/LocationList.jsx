import React,{ useState, useEffect } from 'react';
import { locations } from '../../layout/locations';




function LocationList() {
  const [locationData, setLocationData] = useState(locations);

  
  useEffect(() => {
    // Si tu récupères des données d'un API, tu peux utiliser fetch ici
    // fetch('https://example.com/api/locations')
    //   .then(response => response.json())
    //   .then(data => setLocationData(data));
    // Pour l'instant, on utilise les données statiques
    setLocationData(locations);
  },);

  return (
    <div>
      <h1>List of Locations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {locationData.map((location, index) => (
            <tr key={index}>
              <td>{location.name}</td>
              <td>{location.address}</td>
              <td>{location.latitude}</td>
              <td>{location.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationList;
