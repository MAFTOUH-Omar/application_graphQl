const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

// Route pour ajouter un utilisateur
router.post('/add', UserController.addUser);

// Route pour afficher tous les utilisateurs
router.get('/get', UserController.getUsers);

// Route pour supprimer un utilisateur par ID
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;