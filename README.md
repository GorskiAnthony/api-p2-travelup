# Express API Project

## Description

Ce projet est une API simple construite avec Express.js. Il fournit des points de terminaison pour accéder à une liste d'éléments à partir d'un fichier JSON. L'API gère également les requêtes CORS et le traitement des données envoyées par le client.

## Version

1.0.0

## Technologies Utilisées

- **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
- **Express.js** : Framework web pour Node.js, facilitant la création d'applications web et d'APIs.
- **Body-parser** : Middleware pour analyser le corps des requêtes HTTP.
- **CORS** : Middleware pour gérer les requêtes entre différents domaines.

## Installation

Pour installer le projet, assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, suivez les étapes ci-dessous :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Drylead/starter-basic-api-js
   cd starter-basic-api-js
   ```

2. Installer le projet

   ```bash
   npm install or yarn install
   npm start or yarn start
   ```

## Terminaison API

GET /

    • Retourne un message de bienvenue.
    • Réponse : hello world

GET /items

    • Retourne la liste de tous les éléments présents dans le fichier datas.json.
    • Réponse : Liste des éléments ou message d’erreur si aucun élément n’est trouvé.

GET /items/:id

    • Retourne un élément spécifique par son identifiant.

Paramètres :

    • id: L’identifiant numérique de l’élément à récupérer.
    • Réponse : Détails de l’élément ou message d’erreur si l’identifiant n’est pas valide ou si aucun élément n’est trouvé.

## Contact Us

- Email Us: help@drylead.agency
- [Follow us on Linkedin](https://www.linkedin.com/company/drylead)
- [Follow us on Instagram](https://www.instagram.com/drylead/)
- [Follow us on Facebook](https://facebook.com/drylead/)

## License

Ce projet est sous la licence ISC. Consultez le fichier LICENSE pour plus de détails.

## Remarques

    • Assurez-vous que le fichier datas.json est présent dans le répertoire racine du projet.
    • Pour toute question ou suggestion, n’hésitez pas à envoyer un mail `help@drylead.agency`
