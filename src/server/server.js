const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Middleware pour gérer CORS
app.use(cors());
app.use(express.json()); // Pour gérer les requêtes JSON

// Définition de la route
app.get('/api/locations', (req, res) => {
    res.json([
        { id: 1, name: 'Location 1', latitude: 48.111339, longitude: -1.68002 },
        { id: 2, name: 'Location 2', latitude: 48.112000, longitude: -1.681000 },
    ]);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
