module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("factures", {
      Numero: {
        type: Sequelize.INTEGER
      },
      Date: {
        type: Sequelize.DATE
      },
      Prix: {
        type: Sequelize.DECIMAL(7,2)
      },
      Url: {
        type: Sequelize.STRING
      }
    });
  
    return Facture;
  };

