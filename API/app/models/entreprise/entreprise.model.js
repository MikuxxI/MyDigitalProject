module.exports = (sequelize, Sequelize) => {
    const Entreprise = sequelize.define("entreprises", {
      Siret: {
        type: Sequelize.INTEGER
      },
      NumeroTVA: {
        type: Sequelize.INTEGER
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

    });
  
    return Entreprise;
  };
