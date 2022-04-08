module.exports = (sequelize, Sequelize) => {
    const Utilisateur = sequelize.define("utilisateurs", {
      Pseudo: {
        type: Sequelize.STRING
      },
      Motdepasse_hash: {
        type: Sequelize.STRING
      },
      Motdepasse: {
        type: Sequelize.VIRTUAL
      },
      Nom: {
        type: Sequelize.STRING
      },
      Prenom: {
        type: Sequelize.STRING
      },
      DateDeNaissance: {
        type: Sequelize.DATEONLY
      },
      Email: {
        type: Sequelize.STRING
      },
      Localisation: {
        type: Sequelize.GEOMETRY('POINT', 4326)
      },

    });
  
    return Utilisateur;
  };
