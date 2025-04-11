# Météo Live

Une application météo en temps réel construite avec React et Vite.

## Fonctionnalités

- Recherche de villes avec autocomplétion
- Affichage des conditions météorologiques actuelles
- Interface responsive et moderne
- Gestion des erreurs et états de chargement
- Mise en cache des requêtes avec React Query

## Technologies Utilisées

- React 18+
- Vite
- TailwindCSS
- Axios
- React Query
- WeatherAPI.com

## Installation

1. Clonez le repository
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un compte sur [WeatherAPI.com](https://www.weatherapi.com)
4. Obtenez votre clé API
5. Créez un fichier `.env` à la racine du projet et ajoutez votre clé API :
   ```
   VITE_WEATHER_API_KEY=votre_clé_api
   ```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

## Production

Pour construire l'application pour la production :

```bash
npm run build
```

## Structure du Projet

```
src/
├── components/      # Composants React
├── hooks/          # Custom hooks
├── utils/          # Utilitaires et configuration API
└── App.tsx         # Composant principal
```

## API Documentation

L'application utilise l'API WeatherAPI.com avec les endpoints suivants :

- `/current.json` : Données météo actuelles
- `/search.json` : Recherche de villes

Pour plus d'informations, consultez la [documentation officielle de WeatherAPI](https://www.weatherapi.com/docs/).

## Guide d'Utilisation

1. Lancez l'application
2. Utilisez la barre de recherche pour trouver une ville
3. Sélectionnez une ville dans la liste d'autocomplétion
4. Les données météo s'afficheront automatiquement

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.