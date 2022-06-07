module.exports = (sequelize, Sequelize) => {
    const Lieu = sequelize.define("lieu", {
      DateAjout: {
        type: Sequelize.DATEONLY
      },
      Url: {
        type: Sequelize.STRING
      },
      Nom: {
        type: Sequelize.STRING
      },
      NumeroTelephone: {
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.INTEGER
      },
      Localisation: {
        type: Sequelize.GEOMETRY('POINT', 4326)
      },
      EstApprouve: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Lieu;
  };
