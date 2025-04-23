import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Activer la compression pour de meilleures performances
app.use(compression());

// Servir les fichiers statiques du dossier dist (créé par vite build)
app.use(express.static(join(__dirname, 'dist')));

// Pour SPA, renvoyer index.html pour toutes les routes
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
