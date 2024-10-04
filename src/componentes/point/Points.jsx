import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Points = () => {
    const { token } = useContext(UserContext); // Obtenir le token depuis le contexte
    const [points, setPoints] = useState([]);

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/points', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes
                    },
                });
                setPoints(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des points:', error);
            }
        };

        if (token) {
            fetchPoints();
        }
    }, [token]);

    return (
        <div>
            <h1>Points de localisation</h1>
            <ul>
                {points.map((point) => (
                    <li key={point.id}>{point.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Points;
