module.exports = (sequelize, Sequelize) => {
    const StatusProposition = sequelize.define("statusPropositions", {
      Nom: {
        type: Sequelize.STRING
      }
    });
  
    return StatusProposition;
  };
