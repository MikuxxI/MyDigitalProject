module.exports = (sequelize, Sequelize) => {
    const StatusLieu = sequelize.define("statusLieux", {
      Nom: {
        type: Sequelize.STRING
      }
    });
  
    return StatusLieu;
  };
