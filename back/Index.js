// Import des modules
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
// Pour gérer les chemins en ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;


app.use(cors());



// Route pour lire le JSON
app.get('/api/characters', (req, res) => {
  const dataPath = path.join(__dirname, 'characters.json');

  fs.readFile(dataPath, 'utf-8', (err, jsonData) => {
    if (err) {
      return res.status(500).json({ error: 'Impossible de lire le fichier' });
    }
    const data = JSON.parse(jsonData);
    res.json(data);
  });
});

app.post('/api/characters', (req, res) => {
  const { name, realName, universe } = req.body;

  if (!name || !realName || !universe) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  fs.readFile(charactersFilePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture fichier' });

    let characters = JSON.parse(data);

    // Créer un nouvel id
    const newId = characters.length > 0 ? characters[characters.length - 1].id + 1 : 1;

    const newCharacter = {
      id: newId,
      name,
      realName,
      universe
    };

    characters.push(newCharacter);

    fs.writeFile(charactersFilePath, JSON.stringify(characters, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Erreur écriture fichier' });
      res.status(201).json(newCharacter);
    });
  });
});



app.delete('/api/characters/:id', (req, res) => {
  const charId = parseInt(req.params.id);

  fs.readFile(dataPath, 'utf-8', (err, jsonData) => {
    if (err) return res.status(500).json({ error: 'Impossible de lire le fichier' });

    let data = JSON.parse(jsonData);

    // Supprimer le personnage
    let newCharacters = data.characters.filter(c => c.id !== charId);

    if (newCharacters.length === data.characters.length) {
      return res.status(404).json({ error: 'Personnage non trouvé' });
    }

    // 🔥 Réattribuer les IDs automatiquement (1,2,3...)
    newCharacters = newCharacters.map((c, index) => ({ ...c, id: index + 1 }));

    // Sauvegarder dans le JSON
    const newData = { characters: newCharacters };
    fs.writeFile(dataPath, JSON.stringify(newData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Impossible de sauvegarder le fichier' });

      res.json({ message: 'Personnage supprimé avec succès', characters: newCharacters });
    });
  });
});


  // Lancer le serveur
  app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
  });