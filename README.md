# 🏎️ F1 Manager App - Ionic Angular & Firebase

Application mobile CRUD pour gérer les pilotes et les courses de Formule 1. Cette app permet d'ajouter, modifier, supprimer et visualiser des pilotes et des courses, ainsi que de les ajouter aux favoris pour un accès rapide.

---

## 📱 Aperçu du Projet

Cette application mobile est développée en **Ionic Angular** avec un backend **Firebase**. Elle offre une gestion complète des pilotes et des courses.

## 🎯 Fonctionnalités

- 🔍 **Afficher la liste des pilotes et des courses**
- ➕ **Ajouter** de nouveaux pilotes et courses
- ✏️ **Modifier** les informations des pilotes et des courses existants
- ❌ **Supprimer** les pilotes et courses
- ⭐ **Ajouter aux favoris** : marquer les pilotes et courses favoris pour un accès rapide
- 🔄 **Synchronisation en temps réel** grâce à Firebase
- 🔎 **Bar de recherche** Rechercher rapidement les pilotes/courses

---

## 🚀 Installation

### Prérequis

- **Node.js** et **npm**
- **Ionic CLI** : installez avec `npm install -g @ionic/cli`
- **Firebase** : créez un projet Firebase et configurez une base de données

### Étapes d'installation

1. **Clonez le repository** :
   ```bash
   git clone https://github.com/lilyaan444/formule-one.git
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Lancez l’application en mode développement** :
   ```bash
   ionic serve
   ```

4. **Déploiement sur mobile** (facultatif) :
   ```bash
   ionic capacitor add android
   ionic capacitor add ios
   ```

---

## 📋 Utilisation

- **Affichage** : Parcourez les pilotes et courses dans l'app.
- **Favoris** : Ajoutez vos pilotes et courses préférés aux favoris.
- **Gestion CRUD** : Ajoutez, modifiez ou supprimez des pilotes et des courses à tout moment.

---

## 🔧 Technologies Utilisées

- **Framework** : Ionic avec Angular
- **Backend** : Firebase (Firestore pour la base de données)
