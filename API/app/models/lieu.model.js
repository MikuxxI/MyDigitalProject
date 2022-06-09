module.exports = (sequelize, Sequelize) => {
    const Lieux = sequelize.define("lieu", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      url: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      numeroTelephone: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      localisation: {
        type: Sequelize.GEOMETRY('POINT', 4326)
      },
      estApprouve: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Lieux;
  };


