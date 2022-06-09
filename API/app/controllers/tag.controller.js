const db = require("../models");

// Retrieve all Tags from the database.
exports.findAll = async (req, res) => {
    try {
        const valueTags = await db.Tags.findAll()
        
        if(valueTags){
            res.send(valueTags);
        }

    } catch (error) {
        res.status(500).send({
            message:
               error.message || "Une erreur s'est produite lors de la récupération des tags."
        });
    }
};

// Create and Save a new Tag
exports.create = async (req, res) => {

  // Validate request
  if (!req.body.nom) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide ! Nom"
    });
    return;
  }

    try {
        // Save Tag in the database
        const newTag = await db.Tags.create({
          nom: req.body.nom
        })

        if(newTag){
            res.send(newTag.dataValues);
        }

    } catch (error) {
      console.log(error)
        res.status(500).send({
        message:
        error.message || "Une erreur s'est produite lors de la création du tag."
      });
    }
};