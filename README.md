# Gestion Recettes API

Ce projet consiste à mettre en place un API qui permettra de gérer la création des recettes, la modification, la suppression et l'affichage de la liste de recettes.

## Prérequis

- Node.js (version 14 ou supérieure)
- MySQL (ou un autre système de gestion de base de données compatible)
- Postman (pour tester l'API)

## Installation

1. **Clonez le dépôt** :

```bash
    git clone https://github.com/Aichetou-Gaye/gestion-recette-api.git
```

2.  **Acceder au dossier du projet**

```bash
  cd gestion-recette-api
```

3. **Installez les dépendances**

```bash
   npm install
```

## Démarrage

- Importez la base de données avec le fichier :
[gestion_recettes](./assets/gestion_recettes.sql)

- Renommez le fichier [.env.sample](.env.sample) à "**.env**"

- Remplacez vos informations de connexion à MySQL dans le fichier "**.env**"

- Pour démarrer le projet:

```bash
   npm start
```

- Importer la collection dans postman pour tester les endpoints:
[postman_collections](./postman_collection.json)

## Documentation

### Endpoints API

**Récupérer toutes les recettes**

- URL : /recipes
- Méthode : GET
```
[
  {
    "id": 1,
    "titre": "Recette 1",
    "ingredients": "Ingrédients de la recette 1",
    "type": "Entrée"
  },
  {
    "id": 2,
    "titre": "Recette 2",
    "ingredients": "Ingrédients de la recette 2",
    "type": "Plat"
  }
]
```

**Voir les détails d'une recette**

- URL : /recipes/:id
- Méthode : GET
```
[
  {
    "id": 1,
    "titre": "Recette 1",
    "ingredients": "Ingrédients de la recette 1",
    "type": "Entrée"
  }
]
```

**Créer une nouvelle recette**

- URL : /recipes
- Méthode : POST

```
{
    "titre": "Nouvelle Recette",
    "ingredients": "Ingrédients de la nouvelle recette",
    "type": "Plat principal"
}
```

- Réponse: `"Added successfully"`

  **Mettre à jour une recette**

- URL : /recipes/:id
- Méthode : PUT

```
{
   "titre": "Recette Modifiée",
   "ingredients": "Ingrédients de la recette modifiée",
   "type": "Dessert"
  }
```

- Réponse: `"Updated successfully"`

  **Supprimer une recette**

- URL : /recipes/:id
- Méthode : DELETE
- Réponse: `"Deleted successfully"`

### Tests unitaires

```bash
npm test
```

### ESlint : correction de code

```bash
npm run lint
```

### Prettier: format de code

```bash
npm run format
```

## Docker

- Renommez le fichier [.env.test.sample](.env.test.sample) à "**.env.test**" et remplacez par vos informations de connexion à MySQL

- Builder l'image docker

```bash
docker compose build
```

- Lancer le contenair

```bash
docker compose up -d
```

- Sur la ligne de commande exécutez la commande pour la connexion à MySQL:

```bash
docker exec -it gestion_recettes bash
```

```bash
mysql -u root -p
```

- Dans le fichier [script.sql](./assets/script.sql), copiez la requête pour créer une table dans la base de données de votre image docker;


- Retournez sur postman pour tester les endpoints;

## Auteurs:

[Aichetou Gaye](https://github.com/Aichetou-Gaye)

