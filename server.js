const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Servir des fichiers statiques depuis le répertoire 'public'
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Route pour télécharger un fichier
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/images', filename);

    // Vérifier si le fichier existe avant de le télécharger
    res.download(filePath, filename, (err) => {
        if (err) {
            console.error('Erreur lors du téléchargement du fichier:', err);
            res.status(404).send('Fichier non trouvé');
        }
    });
});

app.post('/add-user', (req, res) => {
    const newUser = req.body;

    // Lire le fichier JSON existant
    const filePath = path.join(__dirname, 'src', 'Components', 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier:', err);
            return res.status(500).send('Erreur serveur');
        }

        // Ajouter le nouvel utilisateur
        let users = [];
        try {
            users = JSON.parse(data);
        } catch (parseError) {
            console.error('Erreur de parsing JSON:', parseError);
            return res.status(500).send('Erreur serveur');
        }
        
        users.push(newUser);

        // Écrire les données mises à jour dans le fichier JSON
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Erreur d\'écriture du fichier:', err);
                return res.status(500).send('Erreur serveur');
            }

            res.status(200).send('Utilisateur ajouté avec succès');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
}); 