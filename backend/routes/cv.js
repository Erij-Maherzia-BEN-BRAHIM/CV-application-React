const express = require("express");
const cvCtrl = require("../controllers/cv");
const isAuth = require("../middelware/is-auth");
const router = express.Router();

//const isAuth = require("../middelware/is-auth");

// récupérer la liste de toutes les personnes
router.get('/persons', cvCtrl.getAllPersons);

//récupérer les infos sur une SEULE personne
router.get('/persons/:id',isAuth, cvCtrl.getPerson);

//création d'une nouvelle personne
router.post('/persons',isAuth, cvCtrl.createPerson);

//Update d'une personne
router.put('/persons/:id',isAuth, cvCtrl.updatePerson);

//suppression d'une personne
router.delete('/persons/:id',isAuth, cvCtrl.deletePerson);

module.exports = router;