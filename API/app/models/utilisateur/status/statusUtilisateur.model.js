module.exports = (sequelize, Sequelize) => {
    const StatusUtilisateur = sequelize.define("statusUtilisateurs", {
      Nom: {
        type: Sequelize.STRING
      }
    });
  
    return StatusUtilisateur;
  };
