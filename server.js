import fs from 'fs';
import { join } from 'path';

// Plus tard dans le code
if (!fs.existsSync(join(__dirname, 'dist'))) {
    console.error("Le dossier 'dist' n'existe pas. Le build n'a pas été exécuté correctement.");
    // Afficher un message d'erreur au lieu de planter
}
