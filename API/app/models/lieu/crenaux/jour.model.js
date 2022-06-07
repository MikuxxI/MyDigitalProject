module.exports = (sequelize, Sequelize) => {
    const Jour = sequelize.define("jours", {
      Nom: {
        type: Sequelize.STRING
      }
    });
  
    return Jour;
  };
