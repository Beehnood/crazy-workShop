import axios from 'axios';

export const token = localStorage.getItem('token'); // Assurez-vous d'avoir stocké le JWT après l'authentification

axios.get('http://127.0.0.1:8000/api/points', {
    headers: {
        'Authorization': `Bearer ${token}` // Ajoute le JWT dans les headers
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error("Erreur lors de la récupération des points !", error);
});
