module.exports = (sequelize, Sequelize) => {
    const Crenaux = sequelize.define("crenaux", {
      Heure_Début: {
        type: Sequelize.TIME
      },
      Heure_Fin: {
        type: Sequelize.TIME
      }
    });
  
    return Crenaux;
  };
