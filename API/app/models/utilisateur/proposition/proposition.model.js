module.exports = (sequelize, Sequelize) => {
    const PropositionLieu = sequelize.define("propositionLieux", {
      DateAjout: {
        type: Sequelize.DATEONLY
      },
      URL: {
        type: Sequelize.STRING
      },
      Nom: {
        type: Sequelize.STRING
      },
      NumeroTelephone: {
        type: Sequelize.INTEGER
      },
      Localisation: {
        type: Sequelize.GEOMETRY('POINT', 4326)
      },
      Description: {
        type: Sequelize.STRING
      }

    });
  
    return PropositionLieu;
  };
