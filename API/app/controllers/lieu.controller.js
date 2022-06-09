const db = require("../models");
const Tags = db.Tags
const Lieux = db.Lieux

// Retrieve all Lieux from the database.
exports.findAll = async (req, res) => {
    try {
        const Lieu = await Lieux.findAll()
        
        if(Lieu){
            res.send(Lieu);
        }

    } catch (error) {
        res.status(500).send({
            message:
               error.message || "Une erreur s'est produite lors de la récupération des lieux."
        });
    }
};

// Create and Save a new Lieu
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.nom && !req.body.url && !req.body.numeroTelephone) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide ! Nom, URL, numTéléphone"
    });
    return;
  }

  // Create a Tutorial
  const lieu = {
    nom: req.body.nom,
    url: req.body.url,
    numeroTelephone: req.body.numeroTelephone 
  };

    try {
        // Save Tutorial in the database
        const newLieu = await Lieux.create(lieu)

        if(newLieu){
            res.send(newLieu.dataValues);
        }

    } catch (error) {
        res.status(500).send({
        message:
        error.message || "Une erreur s'est produite lors de la création du lieu."
      });
    }
};


// Create and Save a new Lieu with Tags
exports.createWithTags = async (req, res) => {
  // Validate request
  if (!req.body.nom && !req.body.url && !req.body.numeroTelephone && !req.body.tag) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide ! Nom, URL, numTéléphone, nomTag"
    });
    return;
  }

    try {
      console.log("avant")

      console.log(req.body)

      // Save Lieux in the database
      const lieu = await Lieux.create({
        nom: req.body.nom,
        url: req.body.url,
        numeroTelephone: req.body.numeroTelephone
      });

      if(lieu){
          const tag = await Tags.findByPk(req.body.tag)

          const association = await lieu.addTags(tag.dataValues.id)

          if(association){
            res.send("Le lieu " + lieu.dataValues.nom + " a été créer avec succès");
          }
      }

    } catch (error) {
      console.log(error)
        res.status(500).send({
        message:
        error.message || "Une erreur s'est produite lors de la création du lieu."
      });
    }
};