import express from 'express';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';

// Solution alternative pour obtenir le répertoire actuel
const rootDir = process.cwd();
console.log('Répertoire racine:', rootDir);

const app = express();
const PORT = process.env.PORT || 3000;

// Activer la compression pour de meilleures performances
app.use(compression());

// Servir les fichiers statiques du dossier dist
app.use(express.static(path.join(rootDir, 'dist')));

// Pour SPA, renvoyer index.html pour toutes les routes
app.get('*', (req, res) => {
    const indexPath = path.join(rootDir, 'dist', 'index.html');
    console.log('Serving:', indexPath);
    res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
