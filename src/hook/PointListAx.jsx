import axios from "../services/axios.js";
import { useEffect, useState } from "react";

const PointList = () => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);
  
 
  const token = "yJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  const fetchData = async () => {
    try {
      const response = await axios.get('token');

      setLocations(response?.data);
    } catch (err) {
      setError("Erreur lors de la récupération des points : " + err.message);
      console.error(err); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {locations?.map((location) => (
        <div key={location?.id}>{location?.name}</div>
      ))}
    </div>
  );
};

export default PointList;
